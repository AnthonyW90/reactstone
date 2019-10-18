import React, { useGlobal } from "reactn";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/amenities">Amenities</NavLink>
        <NavLink to="/floorplans">Floor Plans</NavLink>
        <NavLink to="/apply">Apply Now</NavLink>
        {loggedIn ? (
          <NavLink to="#" color="red" onClick={() => setLoggedIn(false)}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
