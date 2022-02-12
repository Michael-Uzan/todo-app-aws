import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "../cmp/ListTodo";
import { listTodos } from "../graphql/queries";

export const todoService = {
    query
}

async function query(): Promise<GraphQLResult> {
    try {
        const result: any = await API.graphql(graphqlOperation(listTodos));
        console.log('result', result)
        return result
    } catch (e) {
        alert(e);
        throw new Error('canot load todos')
    }
}
