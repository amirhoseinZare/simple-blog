import classes from "./UserCard.module.scss"
import {useSelector, useDispatch} from "react-redux"
import {setActiveUser} from "../../redux/actions/user.action"

export const UserCard = ({user}) => {
    const dispatch = useDispatch()
    const activeUser = useSelector(({user:{active}})=>active)
    console.log(user)
    return (
        <article className={`${classes.usercard} ${user.id===activeUser.id && classes.activeUserCard}`} onClick={()=>dispatch(setActiveUser(user))}>
            <h2 className={classes.cardHeader}>User {user.id}</h2>
        </article>
    )
}