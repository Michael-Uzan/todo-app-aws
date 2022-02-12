import { FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { eventBusService } from '../services/event-bus.service';
import { todoService } from '../services/todo.service';
import { getTodos } from '../store/actions/todoActions';

export const AddTodo = () => {

    const dispatch = useDispatch()
    const [todo, handleChange, setTodo] = useForm({
        name: '',
        description: '',
        isDone: false
    })

    const onAddTodo = async (ev: FormEvent<HTMLFormElement> | null = null) => {
        if (ev) ev.preventDefault();
        try {
            const newTodo = await todoService.addTodo(todo)
            dispatch(getTodos())
            console.log("Success!");
            setTodo({ name: '', description: '' })
        } catch (err) {
            console.log("Error!", err);
            eventBusService.showErrorMsg('Cannot add todo!')
        }
    };

    const { name, description } = todo
    return (
        <section className="add-todo ">
            <form className="form flex direction-col" onSubmit={(ev) => onAddTodo(ev)}>
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
                <button>AddTodo</button>
            </form>
        </section>
    )
}
