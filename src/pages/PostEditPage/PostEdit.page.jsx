import {useState, useEffect} from "react"
import {postApi} from "../../api/index"
import { useParams } from "react-router"
import TextField from '@material-ui/core/TextField';
import classes from "./PostEdit.module.scss"

export const PostEditPage = ()=>{
    const [formState, setFormState] = useState({ title:'', body:'' })
    const {postId} = useParams()

    const inputHandler = ({target:{value}}, key)=>{
        setFormState({ ...formState, [key]:value })
    }

    const getPost = async ()=>{
        console.log(postId)
        const {data:{body, title}} = await postApi.get(postId)
        console.log(body,'-----', title)
        setFormState({body:body, title:title})
    }

    useEffect(()=>{
        getPost()
    }, [])

    const { title, body } = formState
    return (
        <main>
            <div className={classes.inputsContainer}>
                <TextField className={classes.inputItem} id="outlined-basic" label="title" variant="outlined" value={title} onChange={(e)=>inputHandler(e, 'title')}/>
                <TextField className={classes.inputItem} id="outlined-basic" label="body" variant="outlined" value={body} onChange={(e)=>inputHandler(e,'body')}/>
                <div className={classes.buttonsContainer}>
                    <button className={classes.buttonItem}>save</button>
                    <button className={classes.buttonItem}>cancel</button>
                </div>
            </div>
        </main>
    )
}