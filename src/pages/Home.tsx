import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../store'

export const Home = () => {
    const loggedInUser: any = useSelector((state: RootState) => state.userModule.loggedInUser)

    return (
        <section className="home flex direction-col align-center">
            <h1>Welcome To Todo App!</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWC8RIYQczoGgcwlWhGonDyXl8bI0_xfB8w&usqp=CAU" alt="todos" />
            {!loggedInUser && <Link to="/login" >Login to start</Link>}
        </section>
    )
}
