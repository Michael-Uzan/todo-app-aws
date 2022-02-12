import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "../cmp/ListTodo";
import { createTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import { ITodo } from "../interface/ITodo";

export const todoService = {
    query,
    addTodo
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

