import classes from "./UserList.module.scss"
import {UserCard} from "../index"

export const UserList = ({users}) => (
    <section className={classes.userList}>
        {
            users.map((user)=> <UserCard key={user.id} user ={user}/>)
        }
    </section>
)