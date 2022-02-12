import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <section className="page-not-found flex direction-col align-center">
            <h1>Page not found!</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViCNeqRLgb1uH29iLY5skAe1fR-kAMLjHaA&usqp=CAU" alt="lost" />
            <Link to='/'>Go Home</Link>
        </section>
    )
}
