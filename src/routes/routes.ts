import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { MainApp } from "../pages/MainApp";

interface IRoutes {
    path: string,
    component: any
}

const routes: IRoutes[] = [
    {
        path: '/about',
        component: About,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Home,
    }
]

export default routes;
