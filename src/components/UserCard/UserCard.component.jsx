import classes from "./UserCard.module.scss"

export const UserCard = ({name, id, active, setActiveUser}) => {

    return (
        <article className={`${classes.usercard} ${active && classes.activeUserCard}`} onClick={()=>setActiveUser(id)}>
            <h2 className={classes.cardHeader}>User {id}</h2>
        </article>
    )
}