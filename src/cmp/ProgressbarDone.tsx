import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import { ITodo } from "../interface/ITodo";

interface PropType {
    todos: ITodo[]
}

export const ProgressbarDone = ({ todos }: PropType) => {

    const getTodoCount = (): number => {
        return todos.length
    }

    const getDoneCount = (): number => {
        return todos.reduce((acc: number, todo: ITodo) => {
            if (todo.isDone) acc++
            return acc
        }, 0)
    }

    const getPrecentDone = (): number => {
        return (getDoneCount() / getTodoCount()) * 100
    }

    return (
        <section className="ProgressbarDone">
            <h1>Done Tasks</h1>
            <div className="progress-bar">
                <CircularProgressbarWithChildren
                    className="circularProgressbar"
                    value={getPrecentDone()}
                    styles={buildStyles({
                        pathColor: '#61bd4fb1',
                        trailColor: "#ffffffee",
                    })}
                >
                    <div className="text-done">
                        {getPrecentDone().toFixed()}% Done
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </section>
    )
}
