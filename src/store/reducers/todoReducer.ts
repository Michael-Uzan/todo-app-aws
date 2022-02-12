import { ITodo } from "../../interface/ITodo";

const initialState = {
    todos: null
}

export function todoReducer(state: any = initialState, action: any) {
    var newState = state;
    switch (action.type) {
        case 'SET_TODOS':
            newState = { ...state, todos: action.todos.data.listTodos.items }
            break;
        case 'UPDATE_TODO':
            newState = { ...state, todos: state.todos && state.todos.map((todo: ITodo) => todo.id === action.updatedTodo.id ? action.updatedTodo : todo) }
            break;
        default:
    }
    return newState;
}