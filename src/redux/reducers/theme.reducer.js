import ThemeActionTypes from "../types/theme.type";

const INITIAL_STATE = {
    theme:'white'
}

const themeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ThemeActionTypes.TOGGLE_THEME:{
            const { theme } = action.payload
            return { ...state, theme }
        }
        default:
            return { state}
    }
}

export default themeReducer