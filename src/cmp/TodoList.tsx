import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { Observable } from 'redux';
import { listTodos } from '../graphql/queries';
import { ITodo } from '../interface/ITodo';
import { eventBusService } from '../services/event-bus.service';
import { todoService } from '../services/todo.service';
import { GraphQLResult } from './ListTodo';
import { TodoPreview } from './TodoPreview';

export const TodoList = () => {

    const [todos, setTodos] = useState<GraphQLResult>();

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        try {
            const todos: GraphQLResult = await todoService.query()
            setTodos(todos)
        } catch (err) {
            console.log('canot load todos', err)
            eventBusService.showErrorMsg('Cannot load todos!')
        }
    }

    if (!todos) return <div>Loading</div>

    const todoToShow = todos?.data?.listTodos;

    return (
        <section className="todo-list">
            <ul style={{ listStyleType: "none" }}>
                {todoToShow.items.map((todo: ITodo) => (<TodoPreview todo={todo} key={todo.id} />))}
            </ul>
        </section>
    )
}
