import { lazy } from 'react';

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
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <JobCardUpdate />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'card',
      children: [
        {
          path: 'table',
          element: <AllJobs />
        }
      ]
    },
    {
      path: 'card',
      children: [
        {
          path: 'createCard',
          element: <CreateCard />
        }
      ]
    },
    {
      path: 'card',
      children: [
        {
          path: 'updateCard',
          element: <JobCardUpdate />
        }
      ]
    },
    {
      path: 'spares',
      children: [
        {
          path: 'table',
          element: <AllSpares />
        }
      ]
    },
    {
      path: 'spares',
      children: [
        {
          path: 'createSpares',
          element: <CreateSpares />
        }
      ]
    },
    {
      path: 'spares',
      children: [
        {
          path: 'sparesCategory',
          element: <SparesCategory />
        }
      ]
    },
    {
      path: 'labor',
      children: [
        {
          path: 'table',
          element: <AllLabor />
        }
      ]
    },
    {
      path: 'labor',
      children: [
        {
          path: 'createLabor',
          element: <CreateLabor />
        }
      ]
    },
    {
      path: 'labor',
      children: [
        {
          path: 'laborCategory',
          element: <LaborCategory />
        }
      ]
    },
    {
      path: 'externalWork',
      children: [
        {
          path: 'table',
          element: <AllExternalWork />
        }
      ]
    },
    {
      path: 'externalWork',
      children: [
        {
          path: 'createExternalWork',
          element: <CreateExternalWork />
        }
      ]
    },
    {
      path: 'externalWork',
      children: [
        {
          path: 'externalWorkCategory',
          element: <ExternalWorkCategory />
        }
      ]
    }
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-typography',
    //       element: <UtilsTypography />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-color',
    //       element: <UtilsColor />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-shadow',
    //       element: <UtilsShadow />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // }
  ]
};

export default MainRoutes;
