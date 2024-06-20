import { lazy } from 'react';
import MainLayout from '../layout/MainLayout/index';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Calculator = Loadable(lazy(() => import('views/utilities/calculator')));
const Product = Loadable(lazy(() => import('views/utilities/product')));
const ProductDetails = Loadable(lazy(() => import('views/utilities/productDetails')));
const ProductDescription = Loadable(lazy(() => import('views/utilities/productDescription')));
const TimeLine = Loadable(lazy(() => import('views/utilities/timeline')));
const UsersList = Loadable(lazy(() => import('views/utilities/userslist')));
const GroupList = Loadable(lazy(() => import('views/utilities/grouplist')));
const Logout = Loadable(lazy(() => import('views/utilities/Logout')));

const MainRoutes = {
  path: '/',
  element: <MainLayout/>,
  children: [
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-calculator',
          element: <Calculator />
        },
        {
          path: 'util-product',
          element: <Product /> 
        },
        {
          path: 'util-productDescription',
          element: <ProductDescription /> 
        },
        {
          path: 'util-productDetails/:id',
          element: <ProductDetails />
        },
        {
          path: 'util-timeline',
          element: <TimeLine /> 
        },
        {
          path: 'util-userlist',
          element: <UsersList /> 
        },
        {
          path: 'util-grouplist',
          element: <GroupList /> 
        },
        {
          path: 'util-logout',
          element: <Logout />
        }
      ]
    }
  ]
};

export default MainRoutes;
