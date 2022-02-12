const initialState = {
    todos: null
}

export function todoReducer(state = initialState, action: any) {
    var newState = state;
    switch (action.type) {
        case 'SET_TODOS':
            newState = { ...state, todos: action.todos }
            break;
        default:
    }
    return newState;
}