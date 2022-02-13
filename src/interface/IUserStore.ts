import { CognitoUser } from 'amazon-cognito-identity-js'

export interface UserAction {
    user: CognitoUser,
    type: string
}

export interface UserState {
    loggedInUser: CognitoUser | null | any, /* I Had a problen define username on Cognito user so i use any */
}