import React, { useMemo, useState, useEffect } from 'react';
import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import { MaterialReactTable } from 'material-react-table';
import {
  createTheme,
  ThemeProvider,
  useTheme,
  IconButton,
  Tooltip,
  Grid,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent
} from '@mui/material';
import { Edit, Build } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { gridSpacing } from 'store/constant';
//import Alert from 'views/utilities/Alert';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const JobUserDetails = Loadable(lazy(() => import('views/job/JobUserDetails')));
const JobCarDetails = Loadable(lazy(() => import('views/job/JobCarDetails')));
const JobInfo = Loadable(lazy(() => import('views/job/JobInfo')));
const JobSparesUpdate = Loadable(lazy(() => import('views/job/JobSparesUpdate')));
const JobLaborUpdate = Loadable(lazy(() => import('views/job/JobLaborUpdate')));
const JobConsumablesUpdate = Loadable(lazy(() => import('views/job/JobConsumablesUpdate')));
const JobExternalWorkUpdate = Loadable(lazy(() => import('views/job/JobExternalWorkUpdate')));
import { getRequest, putRequest, postRequest } from 'utils/fetchRequest';

const JobCardUpdate = () => {
  const [data, setData] = useState([]);
  // const [jobInfoOpen, setJobInfoOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [selectedRowSpares, setSelectedRowSpares] = useState({});

  const [userDetails, setUserDetails] = useState({});
  const [carDetails, setCarDetails] = useState({});
  const [jobInfo, setJobInfo] = useState([...Array(1)].map(() => ({ complaints: '', completed: '', remarks: '' })));
  const [jobInfoUpdateOpen, setJobInfoUpdateOpen] = useState(false);

  const [jobSparesCost, setJobSparesCost] = useState({});
  const [jobSparesInfo, setJobSparesInfo] = useState(
    [...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '', action: '' }))
  );
  const [jobConsumablesInfo, setJobConsumablesInfo] = useState(
    [...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' }))
  );
  const [jobLaborInfo, setJobLaborInfo] = useState(
    [...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '0', rate: '0', amount: '0' }))
  );
  const [jobExternalWorkInfo, setJobExternalWorkInfo] = useState(
    [...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '0', rate: '0', amount: '0' }))
  );
  const [jobSparesUpdateOpen, setJobSparesUpdateOpen] = useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMess, setAlertMess] = React.useState('');

  useEffect(() => {
    findAllByJobStatusOpen();

    return () => {
      setData([]);
    };
  }, []);

  const findAllByJobStatusOpen = async () => {
    try {
      const data = await getRequest(process.env.REACT_APP_API_URL + '/jobCard/status/OPEN');
      setData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getJobSpares = async (id) => {
    try {
      const data = await getRequest(process.env.REACT_APP_API_URL + '/jobCard/jobSpares/' + id);
      setJobSparesInfo(data.jobSparesInfo);
      setJobConsumablesInfo(data.jobConsumablesInfo);
      setJobLaborInfo(data.jobLaborInfo);
      setJobExternalWorkInfo(data.jobExternalWorkInfo);
      let sparesCost = {
        totalSparesValue: data.totalSparesValue,
        totalConsumablesValue: data.totalConsumablesValue,
        totalLabourValue: data.totalLabourValue,
        totalExternalWorkValue: data.totalExternalWorkValue,
        grandTotal: data.grandTotal
      };
      setJobSparesCost(sparesCost);
      setJobSparesUpdateOpen(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateJobInfo = (row) => {
    let carInfo = {
      vehicleRegNo: row.vehicleRegNo,
      vehicleName: row.vehicleName,
      vehicleModel: row.vehicleModel,
      kiloMeters: row.kiloMeters,
      technicianName: row.technicianName,
      vehicleOutDate: row.vehicleOutDate,
      fuelPoints: row.fuelPoints,
      driver: row.driver,
      cover: row.cover,
      glass: row.glass,
      dashboardAndTools: row.dashboardAndTools,
      spareWheel: row.spareWheel,
      jackeyHandles: row.jackeyHandles,
      toolKits: row.toolKits,
      penDrive: row.penDrive,
      wheelCap: row.wheelCap,
      acGrills: row.acGrills
    };
    let userInfo = {
      ownerName: row.ownerName,
      ownerAddress: row.ownerAddress,
      ownerPhoneNumber: row.ownerPhoneNumber,
      ownerEmailId: row.ownerEmailId
    };
    setSelectedRow(row);
    setUserDetails(userInfo);
    setCarDetails(carInfo);
    setJobInfo(row.jobInfo);
    setJobInfoUpdateOpen(true);
  };

  function isUserDetailsComplete() {
    return userDetails.ownerName && userDetails.ownerAddress && userDetails.ownerPhoneNumber;
  }

  function isCarDetailsComplete() {
    return carDetails.vehicleRegNo && carDetails.vehicleName && carDetails.vehicleModel && carDetails.kiloMeters && carDetails.fuelPoints;
  }

  function isJobInfoComplete() {
    console.log(JSON.stringify(jobInfo));
    return jobInfo[0].complaints;
  }

  function isJobComplete() {
    return isUserDetailsComplete() && isCarDetailsComplete() && isJobInfoComplete();
  }

  function isJobSparesUpdateComplete() {
    return (
      jobSparesInfo[0]?.sparesAndLabour ||
      jobConsumablesInfo?.[0]?.sparesAndLabour ||
      jobLaborInfo[0]?.sparesAndLabour ||
      jobExternalWorkInfo?.[0]?.sparesAndLabour
    );
  }

  const submitJobCard = () => {
    const jobCard = {
      id: selectedRow.id,
      jobId: selectedRow.jobId,
      jobStatus: selectedRow.jobStatus,
      jobCreationDate: selectedRow.jobCreationDate,
      ownerName: userDetails.ownerName,
      ownerAddress: userDetails.ownerAddress,
      ownerPhoneNumber: userDetails.ownerPhoneNumber,
      ownerEmailId: userDetails.ownerEmailId,
      vehicleRegNo: carDetails.vehicleRegNo,
      vehicleName: carDetails.vehicleName,
      vehicleModel: carDetails.vehicleModel,
      kiloMeters: carDetails.kiloMeters,
      fuelPoints: carDetails.fuelPoints,
      technicianName: carDetails.technicianName,
      driver: carDetails.driver,
      vehicleOutDate: carDetails.vehicleOutDate,
      cover: carDetails.cover,
      glass: carDetails.glass,
      dashboardAndTools: carDetails.dashboardAndTools,
      spareWheel: carDetails.spareWheel,
      jackeyHandles: carDetails.jackeyHandles,
      toolKits: carDetails.toolKits,
      penDrive: carDetails.penDrive,
      wheelCap: carDetails.wheelCap,
      acGrills: carDetails.acGrills,
      //vehicleOutDate: carDetails.vehicleOutDate,
      jobInfo: jobInfo
    };

    updateJobCard(jobCard);
  };

  const updateJobCard = async (payload) => {
    try {
      await putRequest(process.env.REACT_APP_API_URL + '/jobCard', payload);
      handleClose();
    } catch (err) {
      console.log(err.message);
      handleClose();
      setAlertMess(err.message);
      setShowAlert(true);
    }
  };

  const updateJobSparesInfo = (row) => {
    setSelectedRowSpares(row);
    getJobSpares(row.id);
  };

  // function formatPrice(value) {
  //   const number = parseFloat(value);
  //   return isNaN(number) ? value : number.toFixed(2);
  // }
  const handleTotalSparesValueChange = (value) => {
    const updatedData = { ...jobSparesCost, totalSparesValue: value };
    setJobSparesCost(updatedData);
  };
  const handleTotalConsumablesValueChange = (value) => {
    const updatedData = { ...jobSparesCost, totalConsumablesValue: value };
    setJobSparesCost(updatedData);
  };
  const handleTotalLabourValueChange = (value) => {
    const updatedData = { ...jobSparesCost, totalLabourValue: value };
    setJobSparesCost(updatedData);
  };
  const handleTotalExternalWorkValueChange = (value) => {
    const updatedData = { ...jobSparesCost, totalExternalWorkValue: value };
    setJobSparesCost(updatedData);
  };
  const handleGrandTotalValueChange = (value) => {
    const updatedData = { ...jobSparesCost, grandTotal: value };
    setJobSparesCost(updatedData);
  };

  const sumAmounts = (data) => {
    return data
      .filter((row) => row.action !== 'DELETE')
      .reduce((total, currentRow) => {
        // Convert amount to a number in case it's a string, and handle any non-numeric values gracefully
        const amount = Number(currentRow.amount) || 0;
        return total + amount;
      }, 0); // Start with a total of 0
  };

  const submitJobSpares = () => {
    const totalSparesValue = sumAmounts(jobSparesInfo);
    handleTotalSparesValueChange(totalSparesValue);
    const totalConsumablesValue = sumAmounts(jobConsumablesInfo);
    handleTotalConsumablesValueChange(totalConsumablesValue);
    const totalLaborValue = sumAmounts(jobLaborInfo);
    handleTotalLabourValueChange(totalLaborValue);
    const totalExternalWorkValue = sumAmounts(jobExternalWorkInfo);
    handleTotalExternalWorkValueChange(totalExternalWorkValue);
    const grandTotalValue = totalSparesValue + totalConsumablesValue + totalLaborValue + totalExternalWorkValue;
    handleGrandTotalValueChange(grandTotalValue);

    const jobSpares = {
      id: selectedRowSpares.id,
      jobId: selectedRowSpares.jobId,
      jobSparesInfo: jobSparesInfo,
      jobConsumablesInfo: jobConsumablesInfo,
      jobLaborInfo: jobLaborInfo,
      jobExternalWorkInfo: jobExternalWorkInfo,
      totalSparesValue: totalSparesValue,
      totalConsumablesValue: totalConsumablesValue,
      totalLabourValue: totalLaborValue,
      totalExternalWorkValue: totalExternalWorkValue,
      grandTotal: grandTotalValue
    };

    updateJobSpares(jobSpares);
  };

  const updateJobSpares = async (payload) => {
    try {
      await postRequest(process.env.REACT_APP_API_URL + '/jobCard/jobSpares', payload);
      handleClose();
    } catch (err) {
      console.log(err.message);
      handleClose();
      setAlertMess(err.message);
      setShowAlert(true);
    }
  };

  const handleClose = () => {
    setJobInfoUpdateOpen(false);
    setSelectedRow({});
    setUserDetails({});
    setCarDetails({});
    setJobInfo([...Array(1)].map(() => ({ complaints: '', completed: '', remarks: '' })));
    setJobSparesUpdateOpen(false);
    setSelectedRowSpares({});
    setJobSparesInfo([...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' })));
    setJobConsumablesInfo([...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '0', rate: '0', amount: '0' })));
    setJobLaborInfo([...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '0', rate: '0', amount: '0' })));
    setJobExternalWorkInfo(
      [...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '0', rate: '0', amount: '0' }))
    );
    setJobSparesCost({});
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
      // {
      //   accessorKey: 'kiloMeters',
      //   header: 'kiloMeters',
      //   size: 150
      // },
      {
        accessorKey: 'technicianName',
        header: 'Technician Name',
        size: 150
      }
      // {
      //   accessorKey: 'vehicleOutDate',
      //   header: 'Vechicle Out Date',
      //   size: 150
      // },
      // {
      //   accessorKey: 'ownerAddress',
      //   header: 'Address',
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
  const color1 = '#e2d7d5';
  const color2 = '#4f4563';

  function Divider() {
    return (
      <hr
        style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: 1,
          borderColor: '#000000'
        }}
      />
    );
  }

  return (
    <div>
      <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          columns={columns}
          data={data}
          //table={table}
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
          renderRowActions={({ row }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Tooltip arrow placement="left" title="Update Job Info">
                <IconButton
                  onClick={() => {
                    updateJobInfo(row.original);
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Update Job Spares">
                <IconButton
                  onClick={() => {
                    updateJobSparesInfo(row.original);
                  }}
                >
                  <Build />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        />{' '}
      </ThemeProvider>
      <br></br>
      <Dialog open={jobInfoUpdateOpen} onClose={handleClose} aria-labelledby="data-row-dialog-title" fullWidth maxWidth="lg">
        <DialogContent dividers style={{ backgroundColor: 'white', color: 'black' }}>
          {' '}
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2">
                    {'Updating JobCard: ' + selectedRow.jobId + ' VehicleNo.: ' + selectedRow.vehicleRegNo}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <JobInfo data={jobInfo} updateData={setJobInfo} />
                </Grid>
                <Grid item xs={12}>
                  <JobCarDetails data={carDetails} updateData={setCarDetails} />
                </Grid>
                <Grid item xs={12}>
                  <JobUserDetails data={userDetails} updateData={setUserDetails} />
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  {isJobComplete() && (
                    <Button variant="contained" color="error" onClick={submitJobCard}>
                      Update JobCard
                    </Button>
                  )}
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <Button variant="contained" color="error" onClick={handleClose}>
                    Cancel UpdateJobInfo
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <br></br>
      <Dialog open={jobSparesUpdateOpen} onClose={handleClose} aria-labelledby="data-row-dialog-title" fullWidth maxWidth="lg">
        <DialogContent dividers style={{ backgroundColor: 'white', color: 'black' }}>
          {' '}
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2">
                    {'Updating Spares for JobCard: ' + selectedRowSpares.jobId + ' VehicleNo.: ' + selectedRowSpares.vehicleRegNo}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <JobSparesUpdate data={jobSparesInfo} updateData={setJobSparesInfo} />
                </Grid>
                <Grid item xs={12}>
                  <JobConsumablesUpdate data={jobConsumablesInfo} updateData={setJobConsumablesInfo} />
                </Grid>
                <Grid item xs={12}>
                  <JobLaborUpdate data={jobLaborInfo} updateData={setJobLaborInfo} />
                </Grid>
                <Grid item xs={12}>
                  <JobExternalWorkUpdate data={jobExternalWorkInfo} updateData={setJobExternalWorkInfo} />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Total Spares Value"
                    required
                    variant="outlined"
                    value={jobSparesCost.totalSparesValue || ''}
                    InputProps={{
                      readOnly: true
                    }}
                    //onChange={(e) => handleTotalSparesValueChange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Total Consumables Value"
                    required
                    variant="outlined"
                    value={jobSparesCost.totalConsumablesValue || ''}
                    InputProps={{
                      readOnly: true
                    }}
                    //onChange={(e) => handleTotalSparesValueChange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Total Labour Value"
                    required
                    variant="outlined"
                    value={jobSparesCost.totalLabourValue || ''}
                    InputProps={{
                      readOnly: true
                    }}
                    //onChange={(e) => handleTotalLabourValueChange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Total ExternalWork Value"
                    required
                    variant="outlined"
                    value={jobSparesCost.totalExternalWorkValue || ''}
                    InputProps={{
                      readOnly: true
                    }}
                    //onChange={(e) => handleTotalLabourValueChange(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Grand Total"
                    required
                    variant="outlined"
                    value={jobSparesCost.grandTotal || ''}
                    InputProps={{
                      readOnly: true
                    }}
                    //onChange={(e) => handleGrandTotalValueChange(e.target.value)}
                  />
                </Grid>
                {/* <Grid item lg={3} md={6} sm={6} xs={12}>
                  {isJobSparesUpdateComplete() && (
                    <Button variant="contained" color="error" onClick={submitJobSpares}>
                      Update JobSpares
                    </Button>
                  )}
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                  <Button variant="contained" color="error" onClick={handleJobSparesClose}>
                    Cancel Update Spares
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Close</Button> */}
          <Grid container spacing={gridSpacing}>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              {isJobSparesUpdateComplete() && (
                <Button variant="contained" color="error" onClick={submitJobSpares}>
                  Update JobSpares
                </Button>
              )}
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancel Update Spares
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
      <Dialog open={showAlert} onClose={() => setShowAlert(false)} aria-labelledby="data-row-dialog-title" fullWidth maxWidth="lg">
        <DialogContent dividers style={{ backgroundColor: 'white', color: 'black' }}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="info" onClose={() => setShowAlert(false)}>
              {alertMess}
            </Alert>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobCardUpdate;
