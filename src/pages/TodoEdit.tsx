import { FormEvent, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Loading } from "../cmp/Loading"
import { useForm } from "../hooks/useForm"
import { eventBusService } from "../services/event-bus.service"
import { todoService } from "../services/todo.service"

interface PropType {
    match: any
}

export const TodoEdit = ({ match }: PropType) => {

    const history = useHistory()
    const [todo, handleChange, setTodo] = useForm(null)

    useEffect(() => {
        loadTodo()
    }, [])

    const loadTodo = async () => {
        const { todoId } = match.params
        const todo = await todoService.getById(todoId)
        setTodo(todo)
    }

    const onSaveTodo = async (ev: FormEvent<HTMLFormElement> | null = null) => {
        if (ev) ev.preventDefault();
        try {
            await todoService.saveTodo(todo)
            history.push('/todo-app')
            eventBusService.showSuccessMsg('Todo Saved!')
        } catch (err) {
            console.log('cannot save todo', err)
            eventBusService.showErrorMsg('Cannot save todo!')
        }
    }

    if (!todo) return <Loading />

    const { name, description } = todo
    return (
        <section className="todo-edit tac flex direction-col align-center">
            <h1>Edit Todo</h1>
            <form className="form flex direction-col" onSubmit={(ev) => onSaveTodo(ev)}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    autoFocus
                />
                <textarea name="description" value={description} onChange={handleChange} placeholder="Description..."></textarea>
                <button>SaveTodo</button>
            </form>
        </section>
    )
}
