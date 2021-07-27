import PostActionTypes from "../types/post.type";

const INITIAL_STATE = {
    post:{}
}

const postReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.SET_CURRENT_USER:{
            const post = action.payload
            return { ...state, post }
        }
        default:
            return { state}
    }
}

export default postReducer