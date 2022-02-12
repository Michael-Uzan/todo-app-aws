import { FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch, } from 'react-redux';
import { onLogin } from '../store/actions/userActions';

export const Login = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [credentials, handleChange] = useForm({
        username: '',
        password: '',
    })

    const onLoginSubmit = async (ev: FormEvent<HTMLFormElement> | null = null) => {
        try {
            if (ev) ev.preventDefault();
            await dispatch(onLogin(credentials))
            history.push('/todo-app')
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const { username, password } = credentials;

    return (
        <section className="login-signup tac">
            <h1>Login</h1>
            <form className="login-signup-form flex direction-col align-center justify-center" onSubmit={(ev) => onLoginSubmit(ev)}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                    required
                    autoFocus
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button>Log in</button>
            </form>
            <Link className="to-login-signup" to="/signup">Sign up?</Link>
            <div className="quick-login">
                <h3>* For quick login try: </h3>
                <small>
                    Username: aa <br />
                    Password: 12345678
                </small>
            </div>
        </section>
    )
}
