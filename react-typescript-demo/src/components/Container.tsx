import { useState } from "react"
import { AuthUser } from "../types/type.dt"

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleTheLogin = () => {
        setUser({
            name: "sachinabs",
            email: "sachinabs@tada.com"
        })
    }

    const handleTheLogOut = () => {
        setUser(null)
    }


    return (
        <div>
            <button onClick={handleTheLogin}>Login</button>
            <button onClick={handleTheLogOut}>LogOut</button>
            <div>
                <span>User name <code>{user?.name}</code></span> <br />
                <span>User email <code>{user?.email}</code></span>
            </div>
        </div>
    )
}