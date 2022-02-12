import { ITodo } from "../interface/ITodo"

interface PropType {
    todo: ITodo
}

export const TodoPreview = ({ todo }: PropType) => {
    return (
        <section className="todo-preview">
            <div>{todo.name}</div>
            {todo.description ? <p>{todo.description}</p> : <></>}
        </section>
    )
}
