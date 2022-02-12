import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Observable } from 'redux';
import { listTodos } from '../graphql/queries';
import { ITodo } from '../interface/ITodo';
import { eventBusService } from '../services/event-bus.service';
import { todoService } from '../services/todo.service';
import { RootState } from '../store';
import { getTodos } from '../store/actions/todoActions';
import { GraphQLResult } from './ListTodo';
import { TodoPreview } from './TodoPreview';

export const TodoList = () => {

    const dispatch = useDispatch()
    const todos: any = useSelector((state: RootState) => state.todoModule.todos)

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        try {
            console.log('loading todos')
            await dispatch(getTodos())
        } catch (err) {
            console.log('canot load todos', err)
        }
    }

    if (!todos) return <div>Loading</div>

    // const todoToShow = todos?.data?.listTodos;

    if (!todos.length) return (
        <section className="todo-list">
            <h1> No Todos to show... add todo to start...</h1>
        </section>
    )

    return (
        <section className="todo-list">
            <ul style={{ listStyleType: "none" }}>
                {todos.map((todo: ITodo) => (<TodoPreview todo={todo} key={todo.id} />))}
            </ul>
        </section>
    )
}
