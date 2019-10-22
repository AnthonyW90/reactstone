import React from 'reactn';
import styled from 'styled-components';

const Container = styled.div`
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
    background-color: ${props => props.theme.colors.secondary};
    

    &:nth-child(even){
        background-color: ${props => props.theme.colors.primary};
    }
`;

const Sidebar = () => {
    return (
        <Container>
            <Title>Lakeshore Heights</Title>
            <Navigation>
                <Link></Link>
                <Link></Link>
                <Link></Link>
            </Navigation>
        </Container>
    );
};

export default Sidebar;
