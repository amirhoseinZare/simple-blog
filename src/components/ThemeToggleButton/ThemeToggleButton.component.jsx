import {useSelector, useDispatch} from "react-redux"
import classes from "./ThemeToggleButton.module.scss"
import {setActiveTheme} from "../../redux/actions/theme.action"

export const ThemeToggleButton = ()=>{

    const dispatch = useDispatch()
    const theme = useSelector(({theme:{mode}})=>mode)
    const nextTheme = theme==='light'?'dark':'light'

    const handler = ()=>{
        dispatch(setActiveTheme(nextTheme))
    }
    
    return (
        <button onClick={handler} className={classes.button}>change to {theme==='light'?'dark':'light'} mode</button>
    )
}