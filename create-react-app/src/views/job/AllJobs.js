import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle, Button, FormControl, InputLabel, Select, MenuItem, IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
//import DataRowDialog from 'utils/DataRowDialog';
import { OpenInNew, AddCircle } from '@mui/icons-material';
//import Alert from 'views/utilities/Alert';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import JobView from 'views/job/JobView';
import JobCardCreate from 'views/job/JobCardCreate';
import { getRequest, putRequest } from 'utils/fetchRequest';

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
  const [jobCardCreateOpen, setJobCardCreateOpen] = useState(false);

  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMess, setAlertMess] = React.useState('');

  useEffect(() => {
    fetchAllJobsData();

    return () => {
      setData([]);
      setJobStatusOpen(false);
      setSelectedRow({});
      setJobInfoOpen(false);
      setJobCardCreateOpen(false);
    };
  }, []);

  const fetchAllJobsData = async () => {
    try {
      const data = await getRequest(process.env.REACT_APP_API_URL + '/jobCard');
      setData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleJobStatusChange = (event) => {
    const updatedData = { ...selectedRow, jobStatus: event.target.value };
    setSelectedRow(updatedData);
  };

  const handleClose = () => {
    setSelectedRow({});
    setJobStatusOpen(false);
    setJobInfoOpen(false);
    setJobCardCreateOpen(false);
    fetchAllJobsData();
  };

  const handleSave = () => {
    updateJobCard(selectedRow);
    fetchAllJobsData();
    handleClose();
  };

  const updateJobCard = async (payload) => {
    try {
      await putRequest(process.env.REACT_APP_API_URL + '/jobCard/jobStatus', payload);
      setSelectedRow({});
      setJobStatusOpen(false);
      fetchAllJobsData();
    } catch (err) {
      console.log(err.message);
      setAlertMess(err.message);
      setShowAlert(true);
      setSelectedRow({});
      setJobStatusOpen(false);
    }
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
      },
      {
        accessorKey: 'invoiceId', //access nested data with dot notation
        header: 'Invoice No.',
        size: 150
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
        accessorKey: 'jobCreationDate',
        header: 'Job Open Date',
        size: 150
      },
      {
        accessorKey: 'jobCloseDate',
        header: 'Job Closed Date',
        size: 150
      },
      {
        accessorKey: 'technicianName',
        header: 'Technician',
        size: 150
      },
      // {
      //   accessorKey: 'driver',
      //   header: 'Driver',
      //   size: 150
      // },
      {
        accessorKey: 'ownerAddress',
        header: 'Address',
        size: 150
      }
      // {
      //   accessorKey: 'ownerEmailId',
      //   header: 'Email',
      //   size: 150
      // }
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
  const color1 = '#fff';
  const color2 = '#c38b81';

  return (
    <div>
      {showAlert && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity="info" onClose={() => setShowAlert(false)}>
            {alertMess}
          </Alert>
        </Stack>
      )}
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          columns={columns}
          data={data}
          editingMode="modal"
          enableEditing
          initialState={{
            pagination: { pageSize: 10 } // Set default rows per page to 5
          }}
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
              <Tooltip arrow placement="right" title="View Job Card">
                <IconButton
                  onClick={() => {
                    setSelectedRow(row.original);
                    setJobInfoOpen(true);
                  }}
                >
                  <OpenInNew />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Create Job Card">
                <IconButton
                  onClick={() => {
                    setSelectedRow(row.original);
                    console.log('jobcard open');
                    setJobCardCreateOpen(true);
                  }}
                >
                  <AddCircle />
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
      <Dialog
        open={jobCardCreateOpen}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
        maxWidth="lg"
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
            New JobCard for {selectedRow.vehicleRegNo}
          </DialogTitle>
        </Box>
        <DialogContent dividers={scroll === 'paper'}>
          <JobCardCreate data={selectedRow} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {jobInfoOpen && <JobView open={jobInfoOpen} onClose={handleClose} job={selectedRow} />}
    </div>
  );
};

StatusCell.propTypes = {
  cell: PropTypes.shape({
    getValue: PropTypes.func.isRequired
  }).isRequired
};

export default AllJobs;
