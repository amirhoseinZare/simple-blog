import ThemeActionTypes from "../types/theme.type"

const setActiveTheme = (mode) => ({
    type:ThemeActionTypes.TOGGLE_THEME,
    payload:mode
})

export {
    setActiveTheme,
}