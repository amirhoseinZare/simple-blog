import classes from "./PostCard.module.scss"
import { useHistory } from "react-router-dom"


export const PostCard = ({ title, body, url }) => {
    const history = useHistory()

    return (
        <article className={classes.cardItem} onClick={()=>history.push(url)}>
            <h3 className={classes.cardHeader}>{title}</h3>
            <p className={classes.cardBody}>{body}</p>
        </article>
    )
}