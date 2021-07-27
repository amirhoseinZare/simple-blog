import classes from "./PostCard.module.scss"

export const PostCard = ({ title, body }) => (
    <article className={classes.cardItem}>
        <h3 className={classes.cardHeader}>{title}</h3>
        <p className={classes.cardBody}>{body}</p>
    </article>
)