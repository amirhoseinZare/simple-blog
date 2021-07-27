import classes from "./UserPosts.module.scss"
import {PostCard} from "../index"

export const UserPosts = ({posts, user}) => {
    return (
        <section className={classes.postList}>
            <h2 className={classes.postsHeader}>User {user} posts</h2>
            {
                posts.map(({id, title, body})=> {
                    const postDetailUrl = `/post/edit/${id}`
                    return <PostCard url={postDetailUrl} key={id} title={title} body={body}/>
                })
            }
        </section>
    )
}
