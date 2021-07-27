import classes from "./PostCard.module.scss"

export const PostCard = ({title, id, text}) => (
    <article >
        <h3 >{title}</h3>
        <p>{text}</p>
    </article>
)