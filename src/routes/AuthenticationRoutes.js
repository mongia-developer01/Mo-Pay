import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const Login = Loadable(lazy(() => import('views/dashboard/Default/login')));
const MainLayout= Loadable(lazy(() => import('../layout/MainLayout')));
const Logout = Loadable(lazy(() => import('views/utilities/Logout')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: isLoggedIn ? <MainLayout /> : <Login />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/logout',
            element: <Logout />
        },
        {
            path: '*',
            element: isLoggedIn ? <MainLayout /> : <Login />
        },
    ]
};

export default AuthenticationRoutes;
