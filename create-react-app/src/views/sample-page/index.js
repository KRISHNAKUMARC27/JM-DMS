import React, { useState } from 'react';
import { Breadcrumbs, Link } from '@mui/material';
import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import CarIcon from '@mui/icons-material/DirectionsCarFilled';

// dashboard routing
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));

function SamplePage() {
  const [activeComponent, setActiveComponent] = useState('CarDetails');

  function isCarDetailsComplete() {
    //return carDetailsData.model && carDetailsData.type;
    return false;
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
            borderBottom: isCarDetailsComplete() ? '3px solid green' : '3px solid orange',
            '&:hover': {
              color: (theme) => theme.palette.primary.main
            }
          }}
          onClick={() => setActiveComponent('CarDetails')}
        >
          <CarIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          Car Details
        </Link>
        <Link onClick={() => setActiveComponent('UserDetails')}>User Details</Link>
        <Link onClick={() => setActiveComponent('JobInfo')}>Job Info</Link>
      </Breadcrumbs>

      <div className="content">
        {activeComponent === 'CarDetails' && <UtilsShadow />}
        {activeComponent === 'UserDetails' && <UtilsTypography />}
        {activeComponent === 'JobInfo' && <UtilsColor />}
      </div>
    </div>
  );
}

export default SamplePage;
