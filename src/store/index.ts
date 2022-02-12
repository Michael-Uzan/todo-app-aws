import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';
import { userReducer } from './reducers/userReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
  userModule: userReducer,
  todoModule: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))