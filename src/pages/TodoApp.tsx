import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddTodo } from '../cmp/AddTodo';
import { TodoFilter } from '../cmp/TodoFilter';
import { TodoList } from '../cmp/TodoList';
import { UserState } from '../interface/IUserStore';
import { RootState } from '../store';

export const TodoApp = () => {

    const { loggedInUser }: UserState = useSelector((state: RootState) => state.userModule)

    if (!loggedInUser) return (
        <section className="todo-app tac flex direction-col align-center">
            <h1>Please loggin to start </h1>
            <Link to="/login">Login</Link>
        </section>
    )

    return (
        < section className="todo-app tac flex direction-col align-center" >
            <h1>Todo App</h1>
            <TodoFilter />
            <AddTodo />
            <TodoList />
        </ section>
    )
}
