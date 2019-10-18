import React from 'reactn';
import styled from 'styled-components';

const CardStyle = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color || props.theme.colors.highlight};
    border-radius: 16px;
    width: ${props => props.width};
    padding: 2rem;
`;

const Card = (props) => {

    return (
        <CardStyle>{props.children}</CardStyle>
    )
};

export default Card;
