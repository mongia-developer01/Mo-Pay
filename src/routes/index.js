import { useRoutes } from 'react-router-dom';
import AuthenticationRoutes from './AuthenticationRoutes';

// routes
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([AuthenticationRoutes ,MainRoutes]);
}
