import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store'
import { onLogout } from '../store/actions/userActions';
import { useState } from 'react';
import logo from '../assets/imgs/logo.jpg';

export const AppHeader = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const loggedInUser: any = useSelector((state: RootState) => state.userModule.loggedInUser)

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const onMenuClick = (): void => {
        setIsMenuOpen(!isMenuOpen)
    }

    const getMenuClass = (): string => {
        return isMenuOpen ? 'menu-open' : ''
    }

    const onLogoutClick = async () => {
        try {
            await dispatch(onLogout())
            history.push('/')
            onMenuClick()
        } catch (err) {
            console.log(err)
        }
    }

    const onGoBack = () => {
        history.goBack()
    }

    return (
        <header className={`full flex space-between align-center ${getMenuClass()}`}>
            <div className="flex align-center space-between">
                <img src={logo} alt="logo" />
                <button className="back" onClick={onGoBack}>Back</button>
                <h3>Hello {loggedInUser ? loggedInUser.username : 'guest'}</h3>
                <nav className="flex">
                    {!loggedInUser && <NavLink onClick={onMenuClick} activeClassName="active" exact to="/login" >Login</NavLink>}
                    <NavLink onClick={onMenuClick} activeClassName="active" exact to="/todo-app" >Todo</NavLink>
                    {loggedInUser && <NavLink onClick={onMenuClick} activeClassName="active" exact to="/dashboard" >Dashboard</NavLink>}
                    {loggedInUser && <NavLink onClick={onLogoutClick} activeClassName="active" exact to="/" >Logout</NavLink>}
                </nav>
            </div>
            <div className="screen" onClick={onMenuClick}></div>
            <button className="btn-menu-toggle" onClick={onMenuClick}>☰</button>
        </header>
    )
}
