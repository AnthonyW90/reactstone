import React, {useGlobal} from 'reactn'
import styled from 'styled-components'

const Button = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    border: none;
    border-radius: 100%;
    background-color: red;
    color: white;
    height: 60px;
    width: 60px;
    font-weight: bold;
`

const LogoutButton = () => {
    const { 1: setLoggedIn} = useGlobal("loggedIn")
    const { 1: setRole} = useGlobal("role")
    const { 1: setUsername} = useGlobal("username")
    const { 1: setToken} = useGlobal("token")

    const logout = () => {
        setLoggedIn(false)
        setRole(null)
        setUsername(null)
        setToken(null)
    }
    return (
        <Button onClick={logout}>Logout</Button>
    )
}

export default LogoutButton