import UserActionTypes from "../types/user.type"

const setActiveUser = (user) => ({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
})

export {
    setActiveUser,
}