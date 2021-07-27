import {useState, useEffect} from "react"
import {postApi} from "../../api/index"
import {useParams, Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import classes from "./PostEdit.module.scss"

export const PostEditPage = ()=>{
    const [post, setPost] = useState({title:'', body:''})
    const {postId} = useParams()

    const inputHandler = ({target:{value}}, key)=>{
        setPost({ ...post, [key]:value })
    }

    const getPost = async ()=>{
        const {data:post} = await postApi.get(postId)
        setPost(post)
    }

    useEffect(()=>{
        getPost()
    }, [])

    const formSubmitHandler = async (e)=>{
        e.preventDefault()
        const newPost = await postApi.put(post.id, post)
        console.log(newPost)
    }

    const { title, body } = post
    return (
        <main>
            <form className={classes.inputsContainer} noValidate onSubmit={formSubmitHandler}>
                <TextField className={classes.inputItem} id="outlined-basic" label="title" variant="outlined" value={title} onChange={(e)=>inputHandler(e, 'title')}/>
                <TextField className={classes.inputItem} id="outlined-basic" label="body" variant="outlined" value={body} onChange={(e)=>inputHandler(e,'body')}/>
                <div className={classes.buttonsContainer}>
                    <Link to="/" className={classes.cancelButton} type="submit" >cancel</Link>
                    <button className={classes.buttonItem}>save</button>
                </div>
            </form>
        </main>
    )
}