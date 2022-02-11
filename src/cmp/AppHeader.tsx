import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store'
import { onLogout } from '../store/actions/userActions';

export const AppHeader = () => {

    const dispatch = useDispatch()
    const loggedInUser: any = useSelector((state: RootState) => state.userModule.loggedInUser)

    const onLogoutClick = async () => {
        try {
            await dispatch(onLogout())
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <header className="full">
            <h3>Hello {loggedInUser ? loggedInUser.username : 'guest'}</h3>
            <nav className="flex justify-center">
                {!loggedInUser && <NavLink activeClassName="active" exact to="/login" >Login</NavLink>}
                {loggedInUser && <NavLink onClick={onLogoutClick} activeClassName="active" exact to="/" >Logout</NavLink>}
            </nav>
        </header>
    )
}
