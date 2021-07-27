import classes from "./UserPosts.module.scss"

import {PostCard} from "../index"

export const UserPosts = ({posts, user}) => (
    <section className={classes.postList}>
        <h2 className={classes.postsHeader}>User {user} posts</h2>
        {
            posts.map(({id, title, body})=> <PostCard key={id} title={title} body={body}/>)
        }
    </section>
)