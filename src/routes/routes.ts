import { About } from "../pages/About";
import { ConfrimSignin } from "../pages/ConfrimSignin";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { Signup } from "../pages/Signup";
import { TodoApp } from "../pages/TodoApp";

interface IRoutes {
    path: string,
    component: any
}

const routes: IRoutes[] = [
    {
        path: '/todo-app',
        component: TodoApp,
    },
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
