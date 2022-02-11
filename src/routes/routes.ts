import { About } from "../pages/About";
import { ConfrimSignin } from "../pages/ConfrimSignin";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { MainApp } from "../pages/MainApp";
import { Signup } from "../pages/Signup";

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
        path: '/confrim-signin',
        component: ConfrimSignin,
    },
    {
        path: '/signup',
        component: Signup,
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
