import { useEffect, useState } from "react"
import {userApi, postApi} from "../../api/index"
import {UserList, UserPosts} from "../../components/index"
import classes from "./Homepage.module.scss"
import {useSelector} from "react-redux"

export const HomePage = () =>{
    const [usersState, setUsersState] = useState({
        list:[]
    })

    const [postState, setPostState] = useState({
        list:[]
    })

    const setUsers = async ()=>{
        try {
            const {data:usersList} = await userApi.getList()
            setUsersState({list:usersList})    
        } catch (error) {
            console.log(error)
        }
    }

    const setPosts = async (id)=>{
        try {
            
            const {data:postList} = await postApi.getList({ params:{userId:id} })
            setPostState({list:postList})                
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        setUsers()
    }, [])

    const activeUser = useSelector(({user:{active}})=>active)

    useEffect(()=>{
        setPosts(activeUser.id)
    }, [activeUser])

    const {list:userList} = usersState
    const {list:postList} = postState

    return (
        <main className={classes.main}>
            <UserList users={userList}/>
            <UserPosts posts={postList}/>
        </main>
    )
}
