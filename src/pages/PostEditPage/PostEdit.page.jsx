import {InputForm} from "../../components/index"
import {useState, useEffect} from "react"
import {postApi} from "../../api/index"

export const PostEditPage = ()=>{
    const [formState, setFormState] = useState({ title:'', body:'' })

    const inputHandler = ({target:value}, key)=>{
        setFormState({ ...formState, [key]:value })
    }

    const getPost = async ()=>{
        const {data:post} = postApi.get('1')
        console.log(post)
    }

    useEffect(()=>{
        getPost()
    }, [])

    const { title, description } = formState
    return (
        <main>
            <InputForm value={title} handleChange={(e)=>inputHandler(e,'title')} label='title'/>
            <InputForm value={description} handleChange={(e)=>inputHandler(e,'body')} label='body'/>
        </main>
    )
}