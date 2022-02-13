import { FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux';
import { onSignup } from '../store/actions/userActions';

export const Signup = ({ history }: any) => {

    const dispatch = useDispatch()

    const [credentials, handleChange] = useForm({
        username: '',
        password: '',
        email: ''
    })

    const onSignupSubmit = async (ev: FormEvent<HTMLFormElement> | null = null) => {
        if (ev) ev.preventDefault();
        try {
            await dispatch(onSignup(credentials))
            history.push('/confrim-signin')
        } catch (err) {
            console.log(err)
        }
    }

    const { username, password, email } = credentials;

    return (
        <section className="login-signup flex tac direction-col align-center">
            <h1>Signup</h1>
            <form className="login-signup-form flex direction-col align-center justify-center" onSubmit={(ev) => onSignupSubmit(ev)}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    autoFocus
                />
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <small>* Password must contain  <br />
                    at least 8 characters</small>
                <button>Signup</button>
            </form>
            <Link className="to-login-signup" to="/login">Login?</Link>
        </section>
    )
}
