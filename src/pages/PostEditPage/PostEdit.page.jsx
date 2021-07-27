import {useState, useEffect} from "react"
import {postApi} from "../../api/index"
import {useParams, Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import classes from "./PostEdit.module.scss"
import { SuccessModal } from "../../components/index";
import Joi from "joi"

const validators = {
    body:Joi.string().min(5).required(),
    title: Joi.string().min(3).required()
}

export const PostEditPage = ()=>{
    const [formValidation, setFormValidation] = useState({title:true, body:true })
    const [postState, setPostState] = useState({})
    const [modalState, setModalState] = useState(false)
    const {postId} = useParams()
    const getPost = async ()=>{
        try {
            const {data} = await postApi.get(postId)
            const {body , title} = data
            setFormValidation({body , title})
            setPostState(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getPost()
    }, [])

    const inputHandler = ({target:{value}}, key)=>{
        let isValid = validators[key].validate(value).error ? false : true
        console.log(isValid)
        setFormValidation({...formValidation, [key]:isValid} )
        setPostState({ ...postState,[key]:value })
    }

    const formSubmitHandler = async (e)=>{
        try {
            e.preventDefault()
            const { title, body } = formValidation
            if(title && body){
                await postApi.put(postState.id, postState)
                setModalState(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const { title, body } = postState
    const { title:isTitleValid, body:isBodyValid } = formValidation
    return (
        <main>
            <SuccessModal open={modalState} handleClose={()=>setModalState(false)}/>
            <form className={classes.inputsContainer} noValidate onSubmit={formSubmitHandler}>
                <TextField autoFocus={true} helperText={isTitleValid ? "title should be at least 3 characters" : "title is required and should be at least 3 characters"} error={!isTitleValid} className={classes.inputItem} id="outlined-basic" label="title" variant="outlined" value={title} onChange={(e)=>inputHandler(e, 'title')}/>
                <TextField autoFocus={true} helperText={isBodyValid ? "body should be at least 5 characters": "body is required and should be at least 5 characters" } error={!isBodyValid} className={classes.inputItem} id="outlined-basic" label="body" variant="outlined" value={body} onChange={(e)=>inputHandler(e,'body')}/>
                <div className={classes.buttonsContainer}>
                    <Link to="/" className={classes.cancelButton} type="submit" >cancel</Link>
                    <button className={classes.buttonItem}>save</button>
                </div>
            </form>
        </main>
    )
}