import React, { useGlobal } from "reactn";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {AnimatedButton} from '../style/Button'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: ${props => props.theme.colors.background};
`;
const Logo = styled.h2`
  color: ${props => props.theme.colors.highlight};
  margin-left: 1rem;
`;
const NavLinks = styled.div`
  display: flex;
`;
const NavLink = styled(Link)`
  border: 1px solid ${props => props.color || props.theme.colors.highlight};
  border-radius: 8px;
  padding: 0.5rem;
  margin-right: 1rem;
  color: ${props => props.color || props.theme.colors.highlight};
  transition: all 0.5s ease;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useGlobal("loggedIn");

  return (
    <Nav>
      <Logo>Lakeshore Heights</Logo>
      <NavLinks>
        {/* <NavLink to="/">Home</NavLink> */}
        <AnimatedButton To="/" Text="Home"/>
        <AnimatedButton To="/gallery"Text="Gallery"/>
        <AnimatedButton To="/amenities" Text="Amenities"/>
        <AnimatedButton To="/floorplans"Text="Floorplans"/>
        <AnimatedButton To="/apply" Text={loggedIn ? 'Application' : 'Apply Now'}/>
        {loggedIn ? (
          <AnimatedButton To="#" Text="Logout" Click={() => setLoggedIn(false)} />
        ) : (
          <AnimatedButton To="/login" Text="Login"/>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
