import React, {useGlobal} from 'reactn'
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
    position: absolute;
    font-size: 16px;
    top: 10px;
    right: 10px;
    border: none;
    border-radius: 12px;
    background-color: red;
    color: white;
    height: 60px;
    width: 80px;
    font-weight: bold;

    transition: all .5s;

    &:hover{
        background-color: tomato;
    }
`

const RouteHome = styled(Link)`
    text-decoration: none;
    color: #fff;
`

const LogoutButton = () => {
    const [ loggedIn, setLoggedIn ] = useGlobal("loggedIn")
    const { 1: setRole} = useGlobal("role")
    const { 1: setUsername} = useGlobal("username")
    const { 1: setToken} = useGlobal("token")
    const { 1: setUsers} = useGlobal("users")
    const { 1: setBuildings} = useGlobal("buildings")
    const { 1: setAparments} = useGlobal("apartments")
    const { 1: setApplications} = useGlobal("applications")
    const { 1: setLeases} = useGlobal("leases")
    const { 1: setTickets} = useGlobal("tickets")

    const logout = () => {
        setLoggedIn(false)
        setRole(null)
        setUsername(null)
        setToken(null)
        setUsers(null)
        setBuildings(null)
        setAparments(null)
        setApplications(null)
        setLeases(null)
        setTickets(null)
    }
    return (
        <>
        <Button onClick={logout}><RouteHome to='/'>Logout</RouteHome></Button>
        </>
    )
}

export default LogoutButton