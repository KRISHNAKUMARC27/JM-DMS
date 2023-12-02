import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Link } from '@mui/material';
import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import CarIcon from '@mui/icons-material/DirectionsCarFilled';
import Person4Icon from '@mui/icons-material/Person4';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const JobUserDetails = Loadable(lazy(() => import('views/job/JobUserDetails')));
const JobCarDetails = Loadable(lazy(() => import('views/job/JobCarDetails')));
const JobInfo = Loadable(lazy(() => import('views/job/JobInfo')));

function JobCardCreate() {
  const [activeComponent, setActiveComponent] = useState('UserDetails');
  const [userDetails, setUserDetails] = useState({});
  const [carDetails, setCarDetails] = useState({});
  const [jobInfo, setJobInfo] = useState([...Array(1)].map(() => ({ complaints: '', completed: '', remarks: '' })));
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMess, setAlertMess] = React.useState('');
  const [alertColor, setAlertColor] = React.useState('');

  useEffect(() => {
    return () => {
      setUserDetails({});
      setCarDetails({});
      setJobInfo([]);
    };
  }, []);

  function isUserDetailsComplete() {
    return userDetails.ownerName && userDetails.ownerAddress && userDetails.ownerPhoneNumber;
  }

  function isCarDetailsComplete() {
    return carDetails.vehicleRegNo && carDetails.vehicleName && carDetails.vehicleModel && carDetails.kiloMeters && carDetails.fuelPoints;
  }

  function isJobInfoComplete() {
    //console.log(JSON.stringify(jobInfo));
    return jobInfo[0].complaints;
  }

  function isJobComplete() {
    return isUserDetailsComplete() && isCarDetailsComplete() && isJobInfoComplete();
  }

  const submitJobCard = () => {
    const jobCard = {
      jobStatus: 'OPEN',
      ownerName: userDetails.ownerName,
      ownerAddress: userDetails.ownerAddress,
      ownerPhoneNumber: userDetails.ownerPhoneNumber,
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
      jobInfo: jobInfo
    };

    saveJobCard(jobCard);
  };

  const saveJobCard = async (payload) => {
    await fetch(process.env.REACT_APP_API_URL + '/jobCard', {
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
        setAlertMess('JobCard ' + data.jobId + ' for ' + data.vehicleRegNo + ' created successfully');
        setAlertColor('success');
        setShowAlert(true);
        setUserDetails({});
        setCarDetails({});
        setJobInfo([...Array(1)].map(() => ({ complaints: '', completed: '', remarks: '' })));
      })
      .catch((err) => {
        console.log(err.message);
        setAlertMess(err.message);
        setAlertColor('info');
        setShowAlert(true);
      });
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          sx={{
            padding: '5px 15px',
            cursor: 'pointer',
            textDecoration: 'none',
            color: (theme) => theme.palette.text.primary,
            borderBottom: isUserDetailsComplete() ? '3px solid green' : '3px solid orange',
            '&:hover': {
              color: (theme) => theme.palette.secondary.main
            }
          }}
          onClick={() => setActiveComponent('UserDetails')}
        >
          <Person4Icon sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          User Details
        </Link>
        <Link
          sx={{
            padding: '5px 15px',
            cursor: 'pointer',
            textDecoration: 'none',
            color: (theme) => theme.palette.text.primary,
            borderBottom: isCarDetailsComplete() ? '3px solid green' : '3px solid orange',
            '&:hover': {
              color: (theme) => theme.palette.secondary.main
            }
          }}
          onClick={() => setActiveComponent('CarDetails')}
        >
          <CarIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          Car Details
        </Link>

        <Link
          sx={{
            padding: '5px 15px',
            cursor: 'pointer',
            textDecoration: 'none',
            color: (theme) => theme.palette.text.primary,
            borderBottom: isJobInfoComplete() ? '3px solid green' : '3px solid orange',
            '&:hover': {
              color: (theme) => theme.palette.secondary.main
            }
          }}
          onClick={() => setActiveComponent('JobInfo')}
        >
          <TroubleshootIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          Job Info
        </Link>
      </Breadcrumbs>

      <div className="content">
        {activeComponent === 'CarDetails' && <JobCarDetails data={carDetails} updateData={setCarDetails} />}
        {activeComponent === 'UserDetails' && <JobUserDetails data={userDetails} updateData={setUserDetails} />}
        {activeComponent === 'JobInfo' && <JobInfo data={jobInfo} updateData={setJobInfo} />}
      </div>
      <br></br>
      <div className="content">
        {isJobComplete() && (
          <Button variant="contained" color="error" onClick={submitJobCard}>
            Submit JobCard
          </Button>
        )}
      </div>
      {showAlert && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity={alertColor} onClose={() => setShowAlert(false)}>
            {alertMess}
          </Alert>
        </Stack>
      )}
    </div>
  );
}

export default JobCardCreate;
