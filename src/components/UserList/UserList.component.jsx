import classes from "./UserList.module.scss"

import {UserCard} from "../index"

export const UserList = ({users, setActiveUser, activeUser}) => (
    <section className={classes.userList}>
        {
            users.map(({id, name})=> <UserCard key={id} name={name} id={id} active={id===activeUser} setActiveUser={setActiveUser}/>)
        }
    </section>
)