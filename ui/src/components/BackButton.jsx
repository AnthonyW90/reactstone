import React from 'reactn'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link)`
    position: absolute;
    padding: 1rem;
    top: 10px;
    left: 10px;
    border: none;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    font-weight: bold;
    font-size: 48px;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
`

const BackButton = () => {
    return <Button to="/"><span role="img" aria-label="back button">⬅</span></Button>
}

export default BackButton