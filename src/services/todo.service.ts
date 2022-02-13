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

/* I Had a problem define type of GrpahQl result correctly*/

async function query(): Promise<GraphQLResult> {
    try {
        const todos: any | GraphQLResult = await API.graphql(graphqlOperation(listTodos));
        return todos
    } catch (err) {
        console.log("Error! get todos", err);
        throw new Error('canot load todos')
    }
}

async function addTodo(newTodo: ITodo): Promise<GraphQLResult> {
    try {
        const addedTodo: any | GraphQLResult = await API.graphql(graphqlOperation(createTodo, { input: newTodo }));
        return addedTodo
    } catch (err) {
        console.log("Error! add todo", err);
        throw new Error('canot add todo')
    }
}

async function removeTodo(todoId: string) {
    try {
        const deletedTodo: any | GraphQLResult = await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId } }));
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

        const updatedTodo: any | GraphQLResult = await API.graphql(graphqlOperation(updateTodo, { input: newTodo }));
        return updatedTodo
    } catch (err) {
        console.log("Error! update todo", err);
        throw new Error('canot update todo')
    }
}

async function getById(todoId: string) {
    try {
        let todo: any | GraphQLResult = await API.graphql(graphqlOperation(getTodo, { id: todoId }));
        return todo.data.getTodo
    } catch (err) {
        console.log(`Error! get todo ${todoId}`, err);
        throw new Error('canot get todo')
    }
}

