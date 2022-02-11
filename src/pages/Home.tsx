import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <section className="home">
            <h1>Welcome to Todo App!</h1>
            <Link to="/login" >Login to start</Link>
        </section>
    )
}
