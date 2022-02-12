import { eventBusService } from "../../services/event-bus.service"
import { todoService } from "../../services/todo.service"

export function getTodos() {
    return async (dispatch: Function) => {
        try {
            const todos = await todoService.query()
            dispatch({
                type: 'SET_TODOS',
                todos
            })
        } catch (err) {
            console.log('Cannot load todos', err)
            eventBusService.showErrorMsg('Cannot load todos!')
            throw err
        }
    }
}