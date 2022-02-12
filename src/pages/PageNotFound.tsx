import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <section className="page-not-found">
            <h1>Page not found</h1>
            <Link to='/'>Go Home</Link>
        </section>
    )
}
