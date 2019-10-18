import React from 'reactn'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #242424;
    width: 100vw;
    color: white;
    text-align: center;
`

const Emoji = styled.span`
    font-size: 1.5rem;
`

const Footer = () => {
    return (
        <Container><Emoji>☞ </Emoji>This place does not exist<Emoji> ☜</Emoji></Container>
    )
}

export default Footer