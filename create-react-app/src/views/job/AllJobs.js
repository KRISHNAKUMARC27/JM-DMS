import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import Box from '@mui/material/Box';

//nested data is ok, see accessorKeys in ColumnDef below
// const data = [
//   {
//     jobId: 1,
//     jobStatus: 'OPEN',
//     ownerName: 'Krishna',
//     ownerAddress: 'Pungampadi',
//     ownerPhoneNumber: '9940647937',
//     vehicleRegNo: 'TN13K7992',
//     vehicleName: 'Nexon',
//     vehicleModel: 'Diesel',
//     kiloMeters: 82000,
//     technicianName: 'Ramesh',
//     vehicleOutDate: '09/11/2023, 12:32 PM'
//   },
//   {
//     jobId: 2,
//     jobStatus: 'CLOSED',
//     ownerName: 'Chidambaram',
//     ownerAddress: 'Pungampadi',
//     ownerPhoneNumber: '9444465765',
//     vehicleRegNo: 'TN13K7992',
//     vehicleName: 'Santro',
//     vehicleModel: 'Diesel',
//     kiloMeters: 80000,
//     technicianName: 'Dinesh',
//     vehicleOutDate: '09/01/2023, 12:32 PM'
//   },
//   {
//     jobId: 3,
//     jobStatus: 'CANCELLED',
//     ownerName: 'Krishna',
//     ownerAddress: 'Pungampadi',
//     ownerPhoneNumber: '9940647937',
//     vehicleRegNo: 'TN13K7992',
//     vehicleName: 'Nexon',
//     vehicleModel: 'Diesel',
//     kiloMeters: 81000,
//     technicianName: 'Ramesh',
//     vehicleOutDate: '08/11/2023, 12:32 PM'
//   }
// ];

const AllJobs = () => {
  const [data, setData] = useState([]);
  const [jobInfoOpen, setJobInfoOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState('');

  useEffect(() => {
    fetchAllJobsData();

    return () => {
      setData([]);
    };
  }, []);

  const fetchAllJobsData = () => {
    fetch(process.env.REACT_APP_API_URL + '/jobCard')
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleClose = () => {
    setJobInfoOpen(false);
  };
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'jobId', //access nested data with dot notation
        header: 'Job Card No.',
        size: 150
      },
      {
        accessorKey: 'jobStatus', //access nested data with dot notation
        header: 'Status',
        size: 150,
        filterVariant: 'select',
        filterSelectOptions: ['OPEN', 'CLOSED', 'CANCELLED']
      },
      {
        accessorKey: 'ownerName', //access nested data with dot notation
        header: 'Owner Name',
        size: 150
      },
      {
        accessorKey: 'ownerAddress',
        header: 'Address',
        size: 150
      },
      {
        accessorKey: 'ownerPhoneNumber', //normal accessorKey
        header: 'Phone',
        size: 200
      },
      {
        accessorKey: 'vehicleRegNo',
        header: 'Reg. No.',
        size: 150
      },
      {
        accessorKey: 'vehicleName',
        header: 'Vehicle Name',
        size: 150
      },
      {
        accessorKey: 'vehicleModel', //normal accessorKey
        header: 'Model',
        size: 200
      },
      {
        accessorKey: 'kiloMeters',
        header: 'kiloMeters',
        size: 150
      },
      {
        accessorKey: 'technicianName',
        header: 'Technician Name',
        size: 150
      },
      {
        accessorKey: 'vehicleOutDate',
        header: 'Vechicle Out Date',
        size: 150
      }
    ],
    []
  );

  //   const table = useMaterialReactTable({
  //     columns,
  //     data
  //   });

  const globalTheme = useTheme();

  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: globalTheme.palette.mode, //let's use the same dark/light mode as the global theme
          primary: globalTheme.palette.secondary, //swap in the secondary color as the primary for the table
          info: {
            main: 'rgb(255,122,0)' //add in a custom color for the toolbar alert background stuff
          },
          background: {
            default: 'rgba(0, 0, 0, 0)' // set background color to fully transparent
            // set background color to transparent
            // globalTheme.palette.mode === "light"
            //   ? "rgb(254,255,244)" //random light yellow color for the background in light mode
            //   : "#000", //pure black table in dark mode for fun
          }
        },
        typography: {
          button: {
            textTransform: 'none', //customize typography styles for all buttons in table by default
            fontSize: '1.2rem'
          }
        },
        components: {
          MuiTooltip: {
            styleOverrides: {
              tooltip: {
                fontSize: '1.1rem' //override to make tooltip font size larger
              }
            }
          },
          MuiSwitch: {
            styleOverrides: {
              thumb: {
                color: 'pink' //change the color of the switch thumb in the columns show/hide menu to pink
              }
            }
          }
        }
      }),
    [globalTheme]
  );
  const gradientAngle = 195;
  const color1 = '#e2d7d5';
  const color2 = '#4f4563';
  return (
    <div>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          columns={columns}
          data={data}
          muiTablePaperProps={{
            elevation: 0, //change the mui box shadow
            //customize paper styles
            sx: {
              borderRadius: '0',
              //backgroundColor: "#344767",
              background: `linear-gradient(${gradientAngle}deg, ${color1}, ${color2})`
            }
          }}
          muiTableBodyRowProps={({ row }) => ({
            onClick: () => {
              //console.log(JSON.stringify(row));
              setSelectedRow(row.original);
              setJobInfoOpen(true);
            },
            sx: { cursor: 'pointer' }
          })}
        />{' '}
      </ThemeProvider>
      <Dialog
        open={jobInfoOpen}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box
          sx={{
            bgcolor: '#f44336',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 1.25rem'
          }}
        >
          <DialogTitle id="scroll-dialog-title" sx={{ flexGrow: 1, fontSize: '1.5rem' }}>
            {'Job Info'}
          </DialogTitle>

          {/* <IconButton onClick={copyToClipboard} color="inherit">
            <CopyIcon />
          </IconButton>
          <IconButton onClick={downloadJSON} color="inherit">
            <DownloadIcon />
          </IconButton> */}
        </Box>
        <DialogContent dividers={scroll === 'paper'}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer Complaints</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>Remarks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedRow.jobInfo?.length > 0 &&
                selectedRow.jobInfo?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row?.complaints || ''}
                        //onChange={(e) => handleInputChange(index, 'complaints', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <FormControl variant="outlined" style={{ margin: '1px 0' }}>
                        <InputLabel>Status</InputLabel>
                        <Select
                          value={row?.completed || ''}
                          //onChange={(e) => handleInputChange(index, 'completed', e.target.value)}
                          label="Status"
                        >
                          <MenuItem value="Completed">Completed</MenuItem>
                          <MenuItem value="In-Progress">In-Progress</MenuItem>
                          <MenuItem value="Not Started">Not Started</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row?.remarks || ''}
                        //onChange={(e) => handleInputChange(index, 'remarks', e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllJobs;
