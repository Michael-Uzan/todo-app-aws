import { FunctionComponent } from "react";
import { ConfrimSignin } from "../pages/ConfrimSignin";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { TodoApp } from "../pages/TodoApp";
import { TodoEdit } from "../pages/TodoEdit";

interface IRoutes {
    path: string,
    component: FunctionComponent | any
}

const routes: IRoutes[] = [
    {
        path: '/todo/edit/:todoId?',
        component: TodoEdit,
    },
    {
        path: '/todo-app',
        component: TodoApp,
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
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/',
        component: Home,
    }

]

export default routes;
