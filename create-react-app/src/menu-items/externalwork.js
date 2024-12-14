// assets
import { IconKey, IconIdBadge2, IconTableExport, IconTextPlus } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconIdBadge2,
  IconTableExport,
  IconTextPlus
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const externalWork = {
  id: 'externalWork',
  title: 'ExternalWork',
  type: 'group',
  children: [
    {
      id: 'externalWork',
      title: 'External Work',
      type: 'collapse',
      icon: icons.IconIdBadge2,

      children: [
        {
          id: 'allLabor',
          title: 'All External Work',
          type: 'item',
          url: '/externalWork/table',
          icon: icons.IconTableExport
          //target: true
        },
        {
          id: 'createExternalWork',
          title: 'Add New External Work',
          type: 'item',
          url: '/externalWork/createExternalWork',
          icon: icons.IconTextPlus
          //target: true
        },
        {
          id: 'externalWorkCategory',
          title: 'External Work Category',
          type: 'item',
          url: '/externalWork/externalWorkCategory',
          icon: icons.IconTextPlus
          //target: true
        }
        // {
        //   id: 'updateCard',
        //   title: 'Update Job Card',
        //   type: 'item',
        //   url: '/card/updateCard',
        //   icon: icons.IconTextPlus
        //   //target: true
        // }
      ]
    }
    // {
    //   id: 'util-typography',
    //   title: 'Typography',
    //   type: 'item',
    //   url: '/utils/util-typography',
    //   icon: icons.IconTypography,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'util-color',
    //   title: 'Color',
    //   type: 'item',
    //   url: '/utils/util-color',
    //   icon: icons.IconPalette,
    //   breadcrumbs: false
    // },
    // // {
    // //   id: 'util-shadow',
    // //   title: 'Shadow',
    // //   type: 'item',
    // //   url: '/utils/util-shadow',
    // //   icon: icons.IconShadow,
    // //   breadcrumbs: false
    // // },
    // {
    //   id: 'icons',
    //   title: 'Icons',
    //   type: 'collapse',
    //   icon: icons.IconWindmill,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ]
};

export default externalWork;
