import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddTodo } from '../cmp/AddTodo';
import { TodoFilter } from '../cmp/TodoFilter';
import { TodoList } from '../cmp/TodoList';
import { IFilterBy } from '../interface/IFilterBy';
import { UserState } from '../interface/IUserStore';
import { RootState } from '../store';
import { getTodos, setFilterBy } from '../store/actions/todoActions';

export const TodoApp = () => {

    const dispatch = useDispatch()
    const { loggedInUser }: UserState = useSelector((state: RootState) => state.userModule)

    const onChangeFilter = (filterBy: IFilterBy) => {
        dispatch(setFilterBy(filterBy));
        dispatch(getTodos());
    };

    if (!loggedInUser) return (
        <section className="todo-app tac flex direction-col align-center">
            <h1>Please loggin to start </h1>
            <Link to="/login">Login</Link>
        </section>
    )

    return (
        < section className="todo-app tac flex direction-col align-center" >
            <h1>Todo App</h1>
            <TodoFilter onChangeFilter={onChangeFilter} />
            <AddTodo />
            <TodoList />
        </ section>
    )
}
