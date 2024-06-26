// assets
import { IconKey, IconIdBadge2, IconTableExport, IconTextPlus } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconIdBadge2,
  IconTableExport,
  IconTextPlus
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Job Card',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'job',
      title: 'Job Card',
      type: 'collapse',
      icon: icons.IconIdBadge2,

      children: [
        {
          id: 'allJobs',
          title: 'All Jobs',
          type: 'item',
          url: '/card/table',
          icon: icons.IconTableExport
          //target: true
        },
        {
          id: 'createCard',
          title: 'Create New Card',
          type: 'item',
          url: '/card/createCard',
          icon: icons.IconTextPlus
          //target: true
        },
        {
          id: 'updateCard',
          title: 'Update Job Card',
          type: 'item',
          url: '/card/updateCard',
          icon: icons.IconTextPlus
          //target: true
        }
      ]
    }
    // {
    //   id: 'spares',
    //   title: 'Spares Inventory',
    //   type: 'collapse',
    //   icon: icons.IconIdBadge2,

    //   children: [
    //     {
    //       id: 'allSpares',
    //       title: 'All Spares',
    //       type: 'item',
    //       url: '/spares/table',
    //       icon: icons.IconTableExport
    //       //target: true
    //     },
    //     {
    //       id: 'createSpares',
    //       title: 'Add New Spares',
    //       type: 'item',
    //       url: '/spares/createSpares',
    //       icon: icons.IconTextPlus
    //       //target: true
    //     },
    //     {
    //       id: 'sparesCategory',
    //       title: 'Spares Category',
    //       type: 'item',
    //       url: '/spares/sparesCategory',
    //       icon: icons.IconTextPlus
    //       //target: true
    //     }
    //   ]
    // }
    // {
    //   id: 'authentication',
    //   title: 'Authentication',
    //   type: 'collapse',
    //   icon: icons.IconKey,

    //   children: [
    //     {
    //       id: 'login3',
    //       title: 'Login',
    //       type: 'item',
    //       url: '/pages/login/login3',
    //       target: true
    //     },
    //     {
    //       id: 'register3',
    //       title: 'Register',
    //       type: 'item',
    //       url: '/pages/register/register3',
    //       target: true
    //     }
    //   ]
    // }
  ]
};

export default pages;
