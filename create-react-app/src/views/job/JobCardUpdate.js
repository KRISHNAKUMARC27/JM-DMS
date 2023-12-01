import React, { useMemo, useState, useEffect } from 'react';
import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme, IconButton, Tooltip, Grid, Button, Typography, TextField } from '@mui/material';
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

const JobCardUpdate = () => {
  const [data, setData] = useState([]);
  // const [jobInfoOpen, setJobInfoOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [selectedRowSpares, setSelectedRowSpares] = useState();

  const [userDetails, setUserDetails] = useState({});
  const [carDetails, setCarDetails] = useState({});
  const [jobInfo, setJobInfo] = useState([...Array(1)].map(() => ({ complaints: '', completed: '', remarks: '' })));
  const [jobInfoUpdateOpen, setJobInfoUpdateOpen] = useState(false);

  const [jobSparesCost, setJobSparesCost] = useState({});
  const [jobSparesInfo, setJobSparesInfo] = useState(
    [...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' }))
  );
  const [jobLaborInfo, setJobLaborInfo] = useState(
    [...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' }))
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

  const findAllByJobStatusOpen = () => {
    fetch(process.env.REACT_APP_API_URL + '/jobCard/status/OPEN')
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

  const getJobSpares = (id) => {
    fetch(process.env.REACT_APP_API_URL + '/jobCard/jobSpares/' + id)
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setJobSparesInfo(data.jobSparesInfo);
        setJobLaborInfo(data.jobLaborInfo);
        let sparesCost = {
          totalSparesValue: data.totalSparesValue,
          totalLabourValue: data.totalLabourValue,
          grandTotal: data.grandTotal
        };
        setJobSparesCost(sparesCost);
        setJobSparesUpdateOpen(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateJobInfo = (row) => {
    let carInfo = {
      vehicleRegNo: row.vehicleRegNo,
      vehicleName: row.vehicleName,
      vehicleModel: row.vehicleModel,
      kiloMeters: row.kiloMeters,
      technicianName: row.technicianName,
      vehicleOutDate: row.vehicleOutDate
    };
    let userInfo = {
      ownerName: row.ownerName,
      ownerAddress: row.ownerAddress,
      ownerPhoneNumber: row.ownerPhoneNumber
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
    return (
      carDetails.vehicleRegNo && carDetails.vehicleName && carDetails.vehicleModel && carDetails.kiloMeters && carDetails.technicianName
    );
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
      jobSparesInfo[0]?.sparesAndLabour && jobLaborInfo[0]?.sparesAndLabour
      // jobSparesCost?.totalSparesValue &&
      // jobSparesCost?.totalLabourValue &&
      // jobSparesCost?.grandTotal
    );
  }

  const submitJobCard = () => {
    const jobCard = {
      id: selectedRow.id,
      jobId: selectedRow.jobId,
      jobStatus: selectedRow.jobStatus,
      ownerName: userDetails.ownerName,
      ownerAddress: userDetails.ownerAddress,
      ownerPhoneNumber: userDetails.ownerPhoneNumber,
      vehicleRegNo: carDetails.vehicleRegNo,
      vehicleName: carDetails.vehicleName,
      vehicleModel: carDetails.vehicleModel,
      kiloMeters: carDetails.kiloMeters,
      technicianName: carDetails.technicianName,
      //vehicleOutDate: carDetails.vehicleOutDate,
      jobInfo: jobInfo
    };

    updateJobCard(jobCard);
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
        handleClose();
      })
      .catch((err) => {
        console.log(err.message);
      });
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
  const handleTotalLabourValueChange = (value) => {
    const updatedData = { ...jobSparesCost, totalLabourValue: value };
    setJobSparesCost(updatedData);
  };
  const handleGrandTotalValueChange = (value) => {
    const updatedData = { ...jobSparesCost, grandTotal: value };
    setJobSparesCost(updatedData);
  };

  const sumAmounts = (data) => {
    return data.reduce((total, currentRow) => {
      // Convert amount to a number in case it's a string, and handle any non-numeric values gracefully
      const amount = Number(currentRow.amount) || 0;
      return total + amount;
    }, 0); // Start with a total of 0
  };

  const submitJobSpares = () => {
    const totalSparesValue = sumAmounts(jobSparesInfo);
    handleTotalSparesValueChange(totalSparesValue);
    const totalLaborValue = sumAmounts(jobLaborInfo);
    handleTotalLabourValueChange(totalLaborValue);
    const grandTotalValue = totalSparesValue + totalLaborValue;
    handleGrandTotalValueChange(grandTotalValue);

    const jobSpares = {
      id: selectedRowSpares.id,
      jobId: selectedRowSpares.jobId,
      jobSparesInfo: jobSparesInfo,
      jobLaborInfo: jobLaborInfo,
      totalSparesValue: totalSparesValue,
      totalLabourValue: totalLaborValue,
      grandTotal: grandTotalValue
    };

    updateJobSpares(jobSpares);
  };

  const updateJobSpares = async (payload) => {
    await fetch(process.env.REACT_APP_API_URL + '/jobCard/jobSpares', {
      method: 'POST',
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
        handleJobSparesClose();
      })
      .catch((err) => {
        console.log(err.message);
        setAlertMess(err.message);
        setShowAlert(true);
      });
  };

  const handleClose = () => {
    setJobInfoUpdateOpen(false);
    setSelectedRow({});
    setUserDetails({});
    setCarDetails({});
    setJobInfo([...Array(1)].map(() => ({ complaints: '', completed: '', remarks: '' })));
  };

  const handleJobSparesClose = () => {
    setJobSparesUpdateOpen(false);
    setSelectedRowSpares({});
    setJobSparesInfo([...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' })));
    setJobLaborInfo([...Array(1)].map(() => ({ sparesId: '', category: '', sparesAndLabour: '', qty: '', rate: '', amount: '' })));
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
              <Tooltip arrow placement="right" title="Update Spares">
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
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          {jobInfoUpdateOpen && (
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
          )}
        </Grid>
      </Grid>
      <br></br>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          {jobSparesUpdateOpen && (
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
                <JobLaborUpdate data={jobLaborInfo} updateData={setJobLaborInfo} />
              </Grid>
              <Grid item xs={4}>
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
              <Grid item xs={4}>
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
              <Grid item lg={3} md={6} sm={6} xs={12}>
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
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      {showAlert && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity="info" onClose={() => setShowAlert(false)}>
            {alertMess}
          </Alert>
        </Stack>
      )}
    </div>
  );
};

export default JobCardUpdate;
