import React from 'reactn';
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
    grid-template-rows: 20% auto;
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

const Link = styled.a`
    height: 36px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid white;
    font-size: ${props => props.fontSize || '32px'};
    font-weight: ${props => props.fontWeight || '400'};
    

    &:last-child(){
        border-bottom: none;
    }
`;

const Sidebar = () => {
    return (
        <Container>
            <Title>Lakeshore Heights</Title>
            <Navigation>
                <Link fontWeight="bold">Residents</Link>
                <Link fontWeight="bold">Tickets</Link>
                <Link>New Ticket</Link>
            </Navigation>
        </Container>
    );
};

export default Sidebar;
