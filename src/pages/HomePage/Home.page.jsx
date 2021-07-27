import { useEffect, useState } from "react"
import {userApi} from "../../api/index"
import {UserList} from "../../components/index"

export const HomePage = () =>{

    const [usersState, setUsersState] = useState({
        list:[{}]
    })

    const setUsers = async ()=>{
        const {data:usersList} = await userApi.getList()
        console.log(usersList)
        setUsersState({list:usersList})
    }

    useEffect(()=>{
        setUsers()
    }, [])

    return (
        <div>
            <UserList users={usersState.list}/>
        </div>
    )
}
