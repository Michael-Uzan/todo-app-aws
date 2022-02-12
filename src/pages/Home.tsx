import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <section className="home tac flex direction-col align-center">
            <h1>Welcome To Todo App!</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWC8RIYQczoGgcwlWhGonDyXl8bI0_xfB8w&usqp=CAU" alt="todos" />
            <Link to="/login" >Login to start</Link>
        </section>
    )
}
