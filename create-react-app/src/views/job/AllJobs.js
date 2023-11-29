import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle, Button, FormControl, InputLabel, Select, MenuItem, IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import DataRowDialog from 'utils/DataRowDialog';
import { OpenInNew } from '@mui/icons-material';

const StatusCell = ({ cell }) => (
  <Box
    component="span"
    sx={() => ({
      cursor: 'pointer',
      backgroundColor: cell.getValue() === 'OPEN' ? 'green' : 'red',
      borderRadius: '0.35rem',
      //color: "#fff",
      maxWidth: '9ch',
      p: '0.25rem'
      //color: cell.getValue() === 'OPEN' ? 'green' : 'red'
    })}
  >
    {cell.getValue()}
  </Box>
);

const AllJobs = () => {
  const [data, setData] = useState([]);
  const [jobStatusOpen, setJobStatusOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [jobInfoOpen, setJobInfoOpen] = useState(false);

  useEffect(() => {
    fetchAllJobsData();

    return () => {
      setData([]);
      setJobStatusOpen(false);
      setSelectedRow({});
      setJobInfoOpen(false);
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

  const handleJobStatusChange = (event) => {
    const updatedData = { ...selectedRow, jobStatus: event.target.value };
    setSelectedRow(updatedData);
  };

  const handleClose = () => {
    setSelectedRow({});
    setJobStatusOpen(false);
    setJobInfoOpen(false);
  };

  const handleSave = () => {
    updateJobCard(selectedRow);
    fetchAllJobsData();
    handleClose();
  };

  const updateJobCard = async (payload) => {
    await fetch(process.env.REACT_APP_API_URL + '/jobCard', {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSelectedRow({});
        setJobStatusOpen(false);
        fetchAllJobsData();
      })
      .catch((err) => {
        console.log(err.message);
        setSelectedRow({});
        setJobStatusOpen(false);
      });
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
        filterSelectOptions: ['OPEN', 'CLOSED', 'CANCELLED'],
        Header: <i style={{ color: 'blue' }}>Status</i>,
        Cell: StatusCell,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () => {
            //console.log(cell);
            //console.log(cell.row.original);
            setSelectedRow(cell.row.original);
            setJobStatusOpen(true);
          }
        })
        // sx: {
        //   cursor: 'pointer'
        // }
        //color: 'blue'
        // borderRight: ' solid #e0e0e0',
        // alignItems: 'center',
        // '& .Mui-TableHeadCell-Content-Labels': {
        //   padding: '0px'
        // },
        // '& .MuiBox-root': {
        //   padding: '0px'
        // },
        // backgroundColor: 'white',

        // borderTop: ' solid #e0e0e0'
        // }
        // })
      },
      {
        accessorKey: 'ownerName', //access nested data with dot notation
        header: 'Owner Name',
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
      },
      {
        accessorKey: 'ownerAddress',
        header: 'Address',
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
          editingMode="modal"
          enableEditing
          muiTablePaperProps={{
            elevation: 0, //change the mui box shadow
            //customize paper styles
            sx: {
              borderRadius: '0',
              //backgroundColor: "#344767",
              background: `linear-gradient(${gradientAngle}deg, ${color1}, ${color2})`
            }
          }}
          // muiTableBodyRowProps={({ row }) => ({
          //   onClick: () => {
          //     //console.log(JSON.stringify(row));
          //     setSelectedRow(row.original);
          //     setJobInfoOpen(true);
          //   },
          //   // sx: { cursor: 'pointer' }
          // })}
          renderRowActions={({ row }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Tooltip arrow placement="right" title="Open Job Card">
                <IconButton
                  onClick={() => {
                    setSelectedRow(row.original);
                    setJobInfoOpen(true);
                  }}
                >
                  <OpenInNew />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        />{' '}
      </ThemeProvider>
      <Dialog
        open={jobStatusOpen}
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
            {selectedRow.vehicleRegNo}
          </DialogTitle>
        </Box>
        <DialogContent dividers={scroll === 'paper'}>
          <FormControl variant="outlined" style={{ margin: '1px 0' }}>
            <InputLabel>Job Status</InputLabel>
            <Select value={selectedRow?.jobStatus || ''} onChange={handleJobStatusChange} label="Status">
              <MenuItem value="CLOSED">CLOSED</MenuItem>
              <MenuItem value="OPEN">OPEN</MenuItem>
              <MenuItem value="CANCELLED">CANCELLED</MenuItem>
            </Select>
          </FormControl>
          {/* <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job Status</TableCell>
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
          </Table> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <DataRowDialog open={jobInfoOpen} onClose={handleClose} dataRow={selectedRow} />
    </div>
  );
};

StatusCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired
  }).isRequired
};

export default AllJobs;
