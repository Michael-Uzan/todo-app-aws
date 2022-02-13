import { ITodo } from "../../interface/ITodo";
import { TodoAction, TodoState } from "../../interface/ITodoStore";

const initialState: TodoState = {
    todos: null
}

export function todoReducer(state: TodoState = initialState, action: TodoAction) {
    var newState = state;
    switch (action.type) {
        case 'SET_TODOS':
            newState = { ...state, todos: action?.todos?.data?.listTodos?.items }
            break;
        case 'UPDATE_TODO':
            newState = { ...state, todos: state.todos && state.todos.map((todo: ITodo) => todo.id === action?.updatedTodo?.id ? action.updatedTodo : todo) }
            break;
        default:
    }
    return newState;
}