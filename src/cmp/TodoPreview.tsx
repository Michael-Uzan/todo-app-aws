import { useDispatch } from "react-redux"
import { ITodo } from "../interface/ITodo"
import { eventBusService } from "../services/event-bus.service"
import { todoService } from "../services/todo.service"
import { getTodos } from "../store/actions/todoActions"

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

    return (
        <section className="todo-preview">
            <button onClick={onRemoveTodo}>X</button>
            <div>{todo.name}</div>
            {todo.description ? <p>{todo.description}</p> : <></>}
        </section>
    )
}
