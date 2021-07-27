import classes from "./UserPosts.module.scss"
import {PostCard} from "../index"
import {useSelector} from "react-redux"

export const UserPosts = ({posts, user}) => {
    const mode = useSelector(({theme:{mode}})=>mode)

    return (
        <section className={classes.postList} style={{backgroundColor:mode==='light'?'#C4C4C4':'#000000'}}>
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
