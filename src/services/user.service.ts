import { Auth } from 'aws-amplify'
import { ICredentials } from '../interface/ICredentials'
import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    confirmSignUp,
    resendCode
    // getLoggedinUser,
}

async function login(credentials: ICredentials) {
    const { username, password } = credentials;
    const user = await Auth.signIn(username, password);
    if (!user) {
        throw new Error('login service error')
    }
    console.log('user logedin sucess', user)
    return user
    // return _saveLocalUser(user)
}

async function signup(credentials: ICredentials) {
    const { username, password, email } = credentials;
    const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
            email
        }
    });
    return user
    // return _saveLocalUser(user)
}

async function confirmSignUp(username: string, code: string) {
    try {
        await Auth.confirmSignUp(
            username,
            code,
        );
        console.log('sucess confrim')

    } catch (err) {
        console.log('error confrim signin: ', err);
        throw new Error('confrim signin service error')
    }
}

async function resendCode(username: string) {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
        throw new Error('error resending code')
    }
}

async function logout() {
    try {
        await Auth.signOut();
    } catch (err) {
        console.log('error signing out: ', err);
        throw new Error('logout service error')
    }
}

// function getLoggedinUser() {
//     return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
// }

// function _saveLocalUser(user: ICredentials) {
//     sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
//     return user
// }