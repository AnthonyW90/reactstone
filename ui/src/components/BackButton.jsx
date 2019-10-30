import React from 'reactn'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link)`
    position: absolute;
    padding: 1rem;
    top: -20px;
    left: 20px;
    border: none;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    font-weight: bold;
    font-size: 48px;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
`

const BackButton = () => {
    return <Button to="/"><i class="fas fa-chevron-left"></i></Button>
}

export default BackButton