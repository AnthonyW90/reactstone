import React from 'reactn';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Container = styled.div`
    margin: 0;
    overflow: hidden;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    min-width: 300px;
    background-color: ${props => props.theme.colors.primary};
    display: grid;
    grid-template-rows: 200px auto;
`;
const Title = styled.p`
    padding: 3rem;
    font-size: 48px;
    font-weight: 800;
    text-align: center;
    color: ${props => props.theme.colors.highlight};
    border-bottom: 4px ${props => props.theme.colors.highlight} solid;
`;
const Navigation = styled.div`
    color: ${props => props.theme.colors.highlight};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const NavLink = styled(Link)`
    height: 36px;
    width: 100%;
    padding: 1rem;
    color: ${props => props.theme.colors.highlight};
    text-decoration: none;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid white;
    font-size: ${props => props.fontSize || '32px'};
    font-weight: ${props => props.fontWeight || 'Bold'};
    

    &:last-child(){
        border-bottom: none;
    }
`;

const Sidebar = () => {
    return (
        <Container>
            <Title>Lakeshore Heights</Title>
            <Navigation>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/buildings">Buildings</NavLink>
                <NavLink to="/apartments">Units</NavLink>
                <NavLink to="/applications">Applications</NavLink>
                <NavLink to="/tickets">Tickets</NavLink>
            </Navigation>
        </Container>
    );
};

export default Sidebar;
