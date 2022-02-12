import { API, graphqlOperation } from "aws-amplify";
import { createTodo, deleteTodo, updateTodo } from "../graphql/mutations";
import { getTodo, listTodos } from "../graphql/queries";
import { GraphQLResult } from "../interface/IGraphqlResult";
import { ITodo } from "../interface/ITodo";

export const todoService = {
    query,
    addTodo,
    removeTodo,
    saveTodo,
    getById
}

async function query(): Promise<GraphQLResult> {
    try {
        const todos: any = await API.graphql(graphqlOperation(listTodos));
        console.log('todos', todos)
        return todos
    } catch (err) {
        console.log("Error! get todos", err);
        throw new Error('canot load todos')
    }
}

async function addTodo(newTodo: ITodo): Promise<GraphQLResult> {
    try {
        const addedTodo: any = await API.graphql(graphqlOperation(createTodo, { input: newTodo }));
        console.log("add todo Success!");
        return addedTodo
    } catch (err) {
        console.log("Error! add todo", err);
        throw new Error('canot add todo')
    }
}

async function removeTodo(todoId: string) {
    try {
        const deletedTodo: any = await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }));
        console.log("delete todo Success!");
        return deletedTodo
    } catch (err) {
        console.log("Error! delete todo", err);
        throw new Error('canot delete todo')
    }
}

async function saveTodo(newTodo: ITodo) {
    try {
        delete newTodo.createdAt
        delete newTodo.updatedAt
        delete newTodo.owner

        const updatedTodo: any = await API.graphql(graphqlOperation(updateTodo, { input: newTodo }));
        console.log("update todo Success!");
        return updatedTodo
    } catch (err) {
        console.log("Error! update todo", err);
        throw new Error('canot update todo')
    }
}

async function getById(todoId: string) {
    try {
        console.log('todoId', todoId)
        let todo: any = await API.graphql(graphqlOperation(getTodo, { id: todoId }));
        return todo.data.getTodo
    } catch (err) {
        console.log(`Error! get todo ${todoId}`, err);
        throw new Error('canot get todo')
    }
}

