import React, { useState } from 'react';
import { Breadcrumbs, Link } from '@mui/material';
import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import CarIcon from '@mui/icons-material/DirectionsCarFilled';
import Person4Icon from '@mui/icons-material/Person4';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

const JobUserDetails = Loadable(lazy(() => import('views/job/JobUserDetails')));
const JobCarDetails = Loadable(lazy(() => import('views/job/JobCarDetails')));
const JobInfo = Loadable(lazy(() => import('views/job/JobInfo')));

function JobCardCreate() {
  const [activeComponent, setActiveComponent] = useState('UserDetails');
  const [userDetails, setUserDetails] = useState({});
  const [carDetails, setCarDetails] = useState({});
  const [jobInfo, setJobInfo] = useState([...Array(1)].map(() => ({ complaints: '', completed: '', remarks: '' })));

  function isUserDetailsComplete() {
    return userDetails.ownerName && userDetails.ownerAddress && userDetails.ownerPhoneNumber;
  }

  function isCarDetailsComplete() {
    return carDetails.vehicleRegNo && carDetails.vehicleName && carDetails.vehicleModel && carDetails.kMs && carDetails.technicianName;
  }

  function isJobInfoComplete() {
    console.log(JSON.stringify(jobInfo));
    return jobInfo[0].complaints;
  }

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
    </div>
  );
}

export default JobCardCreate;
