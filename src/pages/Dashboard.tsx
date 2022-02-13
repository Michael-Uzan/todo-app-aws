import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { ProgressbarDone } from "../cmp/ProgressbarDone"
import { UserState } from "../interface/IUserStore"
import { RootState } from "../store"

export const Dashboard = () => {

    const history = useHistory()
    const { loggedInUser }: UserState = useSelector((state: RootState) => state.userModule)
    const todos: any = useSelector((state: RootState) => state.todoModule.todos)

    useEffect(() => {
        if (!loggedInUser || !todos) history.push('/')
    }, [])

    const getTodoCount = (): number => {
        return todos.length
    }


    if (!todos.length) return (
        <section className="dashboard tac">
            <h1> No Todos! try to add todos to show stats...</h1>
        </section>
    )
    return (
        <section className="dashboard tac">
            <h2>{getTodoCount()} Todos in total</h2>
            <ProgressbarDone todos={todos} />
        </section>
    )
}
