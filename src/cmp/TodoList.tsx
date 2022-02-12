import { API, graphqlOperation } from 'aws-amplify';
import React from 'react'
import { listTodos } from '../graphql/queries';
import { GraphQLResult } from './ListTodo';

export const TodoList = () => {

    const [list, setList] = React.useState<GraphQLResult>();

    React.useEffect(() => {
        const fetch = async () => {
            try {
                let result = await API.graphql(graphqlOperation(listTodos));
                setList({ data: result });
                console.log('list', list)
            } catch (e) {
                alert(e);
            }
        };
        fetch();
    }, []);

    const toDoList = list?.data?.data.listTodos;
    if (!list) return <div>Loading</div>
    return (
        <section className="todo-list">
            <ul style={{ listStyleType: "none" }}>
                {toDoList.items.map((item: { name: string }, index: number) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </section>
    )
}
