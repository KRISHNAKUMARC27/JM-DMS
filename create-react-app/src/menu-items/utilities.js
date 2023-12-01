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

const utilities = {
  id: 'utilities',
  title: 'Spares',
  type: 'group',
  children: [
    {
      id: 'spares',
      title: 'Spares Inventory',
      type: 'collapse',
      icon: icons.IconIdBadge2,

      children: [
        {
          id: 'allSpares',
          title: 'All Spares',
          type: 'item',
          url: '/spares/table',
          icon: icons.IconTableExport
          //target: true
        },
        {
          id: 'createSpares',
          title: 'Add New Spares',
          type: 'item',
          url: '/spares/createSpares',
          icon: icons.IconTextPlus
          //target: true
        },
        {
          id: 'sparesCategory',
          title: 'Spares Category',
          type: 'item',
          url: '/spares/sparesCategory',
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

export default utilities;
