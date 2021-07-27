import ThemeActionTypes from "../types/theme.type";

const INITIAL_STATE = {
    mode:'light'
}

const themeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ThemeActionTypes.TOGGLE_THEME:{
            const mode = action.payload
            return { ...state, mode:mode }
        }
        default:
            return state
    }
}

export default themeReducer