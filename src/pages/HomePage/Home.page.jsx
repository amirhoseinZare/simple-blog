import { useEffect, useState } from "react"
import {userApi} from "../../api/index"

export const HomePage = () =>{

    const setUsers = async ()=>{
        const {data:users} = await userApi.getList()
        console.log(users)
    }

    useEffect(()=>{
        setUsers()
    })

    return (
        <div>
            <h1>home page</h1>
        </div>
    )
}
