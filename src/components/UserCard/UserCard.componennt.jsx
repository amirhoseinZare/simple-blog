import classes from "./UserCard.module.scss"

export const UserCard = ({user}) => {
    <article className={classes.usercard}>
        <h2>{user}</h2>
    </article>
}