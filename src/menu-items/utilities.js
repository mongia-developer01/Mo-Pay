// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconTimeline,IconLogout,IconGraph } from '@tabler/icons';


// constants
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconTimeline,
    IconLogout,
    IconGraph,
};


// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Menu',
    type: 'group',
    children: [
        {
            id: 'util-color',
            title: 'Calculator',
            type: 'item',
            url: '/utils/util-calculator',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Product',
            type: 'item',
            url: '/utils/util-product',
            icon: icons.IconWindmill,
            breadcrumbs: false
        },
        {
            id: 'util-shadow1',
            title: 'Cart Page',
            type: 'item',
            url: `/utils/util-productDescription`,
            icon: icons.IconWindmill,
            breadcrumbs: false
        },
        {
            id: 'util-shadow2',
            title: 'Delivery Status',
            type: 'item',
            url: `/utils/util-timeline`,
            icon: icons.IconWindmill,
            breadcrumbs: false
        },
        {
            id: 'util-shadow3',
            title: 'Users List',
            type: 'item',
            url: `/utils/util-userlist`,
            icon: icons.IconGraph,
            breadcrumbs: false
        },
        {
            id: 'util-shadow4',
            title: 'Group List',
            type: 'item',
            url: `/utils/util-grouplist`,
            icon: icons.IconGraph,
            breadcrumbs: false
        },
        {
            id: 'util-shadow5',
            title: 'Logout',
            type: 'item',
            url: `/utils/util-logout`,
            icon: icons.IconLogout,
            breadcrumbs: false
        }
    ]
};

export default utilities;