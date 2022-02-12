import { useDispatch } from "react-redux";
import { ITodo } from "../interface/ITodo";
import { eventBusService } from "../services/event-bus.service";
import { todoService } from "../services/todo.service";
import { getTodos, updatedTodo } from "../store/actions/todoActions";
import { utilService } from "../services/util.service";
import { Link } from "react-router-dom";

interface PropType {
    todo: ITodo
}

export const TodoPreview = ({ todo }: PropType) => {

    const dispatch = useDispatch()

    const onRemoveTodo = async () => {
        try {
            const deletedTodo = await todoService.removeTodo(todo.id as string)
            dispatch(getTodos())
        } catch (err) {
            console.log('cannot delete todo', err)
            eventBusService.showErrorMsg('Cannot delete todo!')
        }
    }

    const onToggleDone = async () => {
        try {
            // const newTodo: ITodo = utilService.getDeepCopy(todo)
            todo.isDone = !todo.isDone
            console.log('new update todo', todo)
            dispatch(updatedTodo(todo))
        } catch (err) {
            console.log('cannot update todo', err)
        }
    }

    const getDoneClass = (): string => {
        return todo.isDone ? 'done' : ''
    }

    return (
        <section className="todo-preview">
            <button onClick={onRemoveTodo}>X</button>
            <button onClick={onToggleDone}>Done</button>
            <button><Link to={`todo/edit/${todo.id}`}>Edit</Link></button>
            <div className={`name ${getDoneClass()}`}>{todo.name}</div>
            {todo.description ? <p className={` ${getDoneClass()}`}>{todo.description}</p> : <p></p>}
        </section>
    )
}
