import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddTodo } from '../cmp/AddTodo';
import { TodoList } from '../cmp/TodoList';
import { RootState } from '../store';

export const TodoApp = () => {

    const loggedInUser: any = useSelector((state: RootState) => state.userModule.loggedInUser)

    if (!loggedInUser) return (
        <section className="todo-app">
            <p>Please loggedin to start </p>
            <Link to="/login">Login</Link>
        </section>
    )

    return (
        < section className="todo-app" >
            <h1>Todo App</h1>
            <AddTodo />
            <TodoList />
        </ section>
    )
}
