import { useEffect, useState } from "react"
import {userApi, postApi} from "../../api/index"
import {UserList, UserPosts} from "../../components/index"
import classes from "./Homepage.module.scss"

export const HomePage = () =>{

    const [usersState, setUsersState] = useState({
        list:[],
        active:null
    })

    const [postState, setPostState] = useState({
        list:[]
    })

    const setActiveUser = (id)=>{
        setUsersState({...usersState, active:id})
    }

    const setUsers = async ()=>{
        const {data:usersList} = await userApi.getList()
        console.log(usersList)
        setUsersState({list:usersList})
    }

    const setPosts = async (id)=>{
        const {data:postList} = await postApi.getList({ params:{userId:id} })
        console.log(postList)
        setPostState({list:postList})
    }

    useEffect(()=>{
        setUsers()
    }, [])

    useEffect(()=>{
        setPosts(usersState.active)
    }, [usersState.active])

    const {active:activeUser , list:userList} = usersState
    const {list:postList} = postState

    return (
        <main className={classes.main}>
            <UserList users={userList} setActiveUser={setActiveUser} activeUser={activeUser}/>
            <UserPosts posts={postList} user={activeUser}/>
        </main>
    )
}
