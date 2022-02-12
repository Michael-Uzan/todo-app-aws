import { API, graphqlOperation } from 'aws-amplify';
import React from 'react'
import { createTodo } from '../graphql/mutations';

export const AddTodo = () => {

    const [item, setItem] = React.useState<string>();

    const save = async () => {
        const data = { name: item, isDone: false };
        try {
            await API.graphql(graphqlOperation(createTodo, { input: data }));
            console.log("Success!");
        } catch (e) {
            console.log("Error!", e);
        }
    };

    return (
        <section className="add-todo">
            <input onChange={e => setItem(e.target.value)}></input>
            <button onClick={() => save()}>SAVE</button>
        </section>
    )
}
