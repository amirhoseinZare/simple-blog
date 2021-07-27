import UserActionTypes from "../types/user.type";

const INITIAL_STATE = {
    active:{}
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:{
            const user = action.payload
            return { ...state, active:user }
        }
        default:
            return state
    }
}

export default userReducer