import React from "react"
import { Navigate } from "react-router-dom"
import { useUser } from "shared/hooks/user"
import { IAuthProps } from "types/components"

const Auth: React.FC<IAuthProps> = ({ Element, auth = true }) => {
    const { user, isGettingUser } = useUser()

    if(isGettingUser) return <>loading...</>
    if(!user?.id && auth) return <Navigate to="/login" />
    if(user?.id && !auth) return <Navigate to="/home" />
    return Element
}

export default Auth