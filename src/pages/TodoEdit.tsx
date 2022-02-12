import { FormEvent, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Loading } from "../cmp/Loading"
import { useForm } from "../hooks/useForm"
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
        await todoService.saveTodo(todo)
        history.push('/todo-app')
    }

    if (!todo) return <Loading />

    const { name, description } = todo
    return (
        <section className="todo-edit">
            <form onSubmit={(ev) => onSaveTodo(ev)}>
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
