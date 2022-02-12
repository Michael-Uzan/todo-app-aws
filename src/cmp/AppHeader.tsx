import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store'
import { onLogout } from '../store/actions/userActions';

export const AppHeader = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const loggedInUser: any = useSelector((state: RootState) => state.userModule.loggedInUser)

    const onLogoutClick = async () => {
        try {
            await dispatch(onLogout())
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    const onGoBack = () => {
        history.goBack()
    }

    return (
        <header className="full">
            <h3>Hello {loggedInUser ? loggedInUser.username : 'guest'}</h3>
            <nav className="flex justify-center">
                <button onClick={onGoBack}>Back</button>
                {!loggedInUser && <NavLink activeClassName="active" exact to="/login" >Login</NavLink>}
                <NavLink activeClassName="active" exact to="/todo-app" >Todo</NavLink>
                {loggedInUser && <NavLink onClick={onLogoutClick} activeClassName="active" exact to="/" >Logout</NavLink>}
            </nav>
        </header>
    )
}
