import { useEffect, useState } from "react"
import {userApi} from "../../api/index"
import {UserList} from "../../components/index"

export const HomePage = () =>{

    const [usersState, setUsersState] = useState({
        list:[{}],
        active:null
    })

    const setActiveUser = (id)=>{
        setUsersState({...usersState, active:id})
    }

    const setUsers = async ()=>{
        const {data:usersList} = await userApi.getList()
        console.log(usersList)
        setUsersState({list:usersList})
    }

    useEffect(()=>{
        setUsers()
    }, [])

    const {active:activeUser , list:userList} = usersState

    return (
        <div>
            <UserList users={userList} setActiveUser={setActiveUser} activeUser={activeUser}/>
        </div>
    )
}
