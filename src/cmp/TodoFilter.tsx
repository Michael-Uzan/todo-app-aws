import { useForm } from "../hooks/useForm"

interface PropType {
    onChangeFilter: Function
}

export const TodoFilter = ({ onChangeFilter }: PropType) => {

    const [filterBy, handleChange] = useForm({
        isDone: false,
        name: '',
    }, onChangeFilter)

    const { isDone, name } = filterBy

    return (
        <section className="todo-filter  ">
            <h4>Filter Todos</h4>
            <div className="flex">
                <input value={name} type="text" name="name" onChange={handleChange} placeholder="Name" />
                <div>
                    <input type="checkbox" name="isDone" id="isDone" onChange={handleChange} value={isDone} />
                    <label htmlFor="isDone">Clean Done</label>
                </div>
            </div>
        </section>
    )
}
