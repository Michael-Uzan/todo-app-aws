import { UserAction, UserState } from "../../interface/IUserStore";

const initialState: UserState = {
  loggedInUser: null
}

export function userReducer(state: UserState = initialState, action: UserAction) {
  var newState = state;
  switch (action.type) {
    case 'SET_USER':
      newState = { ...state, loggedInUser: action.user }
      break;
    default:
  }
  return newState;
}