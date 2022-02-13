import { CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify'
import { ICredentials } from '../interface/ICredentials'

export const userService = {
    login,
    logout,
    signup,
    confirmSignUp,
    resendCode
}

async function login(credentials: ICredentials): Promise<CognitoUser> {
    const { username, password } = credentials;
    const user = await Auth.signIn(username, password);
    if (!user) {
        throw new Error('login service error')
    }
    return user
}

async function signup(credentials: ICredentials): Promise<CognitoUser> {
    const { username, password, email } = credentials;
    const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
            email
        }
    });
    if (!user) {
        throw new Error('signup service error')
    }
    return user
}

async function confirmSignUp(username: string, code: string) {
    try {
        await Auth.confirmSignUp(
            username,
            code,
        );
    } catch (err) {
        console.log('error confrim signin: ', err);
        throw new Error('confrim signin service error')
    }
}

async function resendCode(username: string) {
    try {
        await Auth.resendSignUp(username);
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
