import { lazy } from 'react';
import PrivateRoute from 'auth/PrivateRoute'; // Import the PrivateRoute component

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const CreateCard = Loadable(lazy(() => import('views/job/JobCardCreate')));
const AllJobs = Loadable(lazy(() => import('views/job/AllJobs')));
const JobCardUpdate = Loadable(lazy(() => import('views/job/JobCardUpdate')));

const AllSpares = Loadable(lazy(() => import('views/spares/AllSpares')));
const CreateSpares = Loadable(lazy(() => import('views/spares/SparesCreate')));
const SparesCategory = Loadable(lazy(() => import('views/spares/SparesCategory')));

const AllLabor = Loadable(lazy(() => import('views/labor/AllLabor')));
const CreateLabor = Loadable(lazy(() => import('views/labor/LaborCreate')));
const LaborCategory = Loadable(lazy(() => import('views/labor/LaborCategory')));

const AllExternalWork = Loadable(lazy(() => import('views/externalwork/AllExternalWork')));
const CreateExternalWork = Loadable(lazy(() => import('views/externalwork/ExternalWorkCreate')));
const ExternalWorkCategory = Loadable(lazy(() => import('views/externalwork/ExternalWorkCategory')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'JOBCARD']}>
          <JobCardUpdate />
        </PrivateRoute>
      )
    },
    {
      path: 'dashboard/default',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN']}>
          <DashboardDefault />
        </PrivateRoute>
      )
    },
    {
      path: 'card/table',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'JOBCARD']}>
          <AllJobs />
        </PrivateRoute>
      )
    },
    {
      path: 'card/createCard',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'JOBCARD']}>
          <CreateCard />
        </PrivateRoute>
      )
    },
    {
      path: 'card/updateCard',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'JOBCARD']}>
          <JobCardUpdate />
        </PrivateRoute>
      )
    },
    {
      path: 'spares/table',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <AllSpares />
        </PrivateRoute>
      )
    },
    {
      path: 'spares/createSpares',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <CreateSpares />
        </PrivateRoute>
      )
    },
    {
      path: 'spares/sparesCategory',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <SparesCategory />
        </PrivateRoute>
      )
    },
    {
      path: 'labor/table',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <AllLabor />
        </PrivateRoute>
      )
    },
    {
      path: 'labor/createLabor',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <CreateLabor />
        </PrivateRoute>
      )
    },
    {
      path: 'labor/laborCategory',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <LaborCategory />
        </PrivateRoute>
      )
    },
    {
      path: 'externalWork/table',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <AllExternalWork />
        </PrivateRoute>
      )
    },
    {
      path: 'externalWork/createExternalWork',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <CreateExternalWork />
        </PrivateRoute>
      )
    },
    {
      path: 'externalWork/externalWorkCategory',
      element: (
        <PrivateRoute allowedRoles={['MANAGER', 'ADMIN', 'SPARES']}>
          <ExternalWorkCategory />
        </PrivateRoute>
      )
    }
  ]
};

export default MainRoutes;
