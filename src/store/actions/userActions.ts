import { ICredentials } from "../../interface/ICredentials.js";
import { CognitoUser } from 'amazon-cognito-identity-js';
import { eventBusService } from "../../services/event-bus.service";
import { userService } from "../../services/user.service";

export function onLogin(credentials: ICredentials) {
    return async (dispatch: Function) => {
        try {
            const user: CognitoUser | any = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            eventBusService.showSuccessMsg(`Welcome ${user.username}!`)
            return user
        } catch (err) {
            console.log('Cannot login', err)
            eventBusService.showErrorMsg('Sorry cannot Login!')
            throw err
        }
    }
}


export function onSignup(credentials: ICredentials) {
    return async (dispatch: Function) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            eventBusService.showSuccessMsg(`Enter Verfication Code !`)
        } catch (err) {
            console.log('Cannot signup', err)
            eventBusService.showErrorMsg('Sorry cannot Signup!')
            throw err
        }
    }
}

export function onLogout() {
    return async (dispatch: Function) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
            eventBusService.showSuccessMsg(`Bye Bye!`)
        } catch (err) {
            console.log('Cannot logout', err)
            eventBusService.showErrorMsg('Sorry cannot Logout!')
        }
    }
}

