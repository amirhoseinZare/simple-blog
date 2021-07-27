import classes from "./UserPosts.module.scss"

import {UserCard} from "../index"

export const UserList = ({posts}) => (
    <section className={classes.userList}>
        {
            posts.map(({id, name})=> <UserCard key={id} name={name} id={id}/>)
        }
    </section>
)