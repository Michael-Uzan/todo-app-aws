import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm';
import { eventBusService } from '../services/event-bus.service';
import { todoService } from '../services/todo.service';

export const AddTodo = () => {

    const [todo, handleChange] = useForm({
        name: '',
        description: '',
        isDone: false
    })

    const onAddTodo = async (ev: FormEvent<HTMLFormElement> | null = null) => {
        if (ev) ev.preventDefault();
        try {
            const newTodo = await todoService.addTodo(todo)
            console.log("Success!");
        } catch (err) {
            console.log("Error!", err);
            eventBusService.showErrorMsg('Cannot add todo!')
        }
    };

    const { name, description } = todo
    return (
        <section className="add-todo">
            <form onSubmit={(ev) => onAddTodo(ev)}>
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
