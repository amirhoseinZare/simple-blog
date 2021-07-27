import classes from "./UserCard.module.scss"

export const UserCard = ({name, id}) => (
    <article className={classes.usercard}>
        <h2 className={classes.cardHeader}>User {id}</h2>
        <h5 className={classes.cardHeader}>{name}</h5>
    </article>
)