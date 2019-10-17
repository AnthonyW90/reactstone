import React from 'reactn'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    background-color: ${props => props.theme.colors.background};
`
const Logo = styled.h2`
    color: ${props => props.theme.colors.highlight};
    margin-left: 1rem;
`
const NavLinks = styled.div`
    display: flex;
`
const NavLink = styled(Link)`
    border: 1px solid ${props => props.theme.colors.highlight};
    border-radius: 8px;
    padding: .5rem;
    margin-right: 1rem;
    color: ${props => props.theme.colors.highlight};
    transition: all .5s ease;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.primary};
    }
`

const Navbar = () => {


    return (
        <Nav>
            <Logo>Lakeshore Heights</Logo>
            <NavLinks>
                <NavLink to="#">Home</NavLink>
                <NavLink to="#">Gallery</NavLink>
                <NavLink to="#">Amenities</NavLink>
                <NavLink to="#">Floor Plans</NavLink>
                <NavLink to="#">Apply Now</NavLink>
                <NavLink to="/login">Login</NavLink>
            </NavLinks>
        </Nav>
    )
}

export default Navbar