import classes from "./UserList.module.scss"
import {UserCard} from "../index"
import {useSelector} from "react-redux"

export const UserList = ({users}) => {

    const mode = useSelector(({theme:{mode}})=>mode)

    return (
        <section className={classes.userList} style={{backgroundColor:mode==='light'?'#C4C4C4':'#000000'}}>
            {
                users.map((user)=> <UserCard key={user.id} user ={user}/>)
            }
        </section>
    )
}