import { useState } from "react"
// import {  } from "../types/type.dt"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleTheLogin = () => {
        setIsLoggedIn(true)
    }

    const handleTheLogOut = () => {
        setIsLoggedIn(false)
    }


    return (
        <div>
            <button onClick={handleTheLogin}>Login</button>
            <button onClick={handleTheLogOut}>LogOut</button>
            <div>
                <span>User is {isLoggedIn ? "Welcome to home page...!" : "Please login to continue...!"}</span>
            </div>
        </div>
    )
}