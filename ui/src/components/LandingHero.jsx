import React from 'reactn'
import styled from 'styled-components'
import image from '../assets/images/lakeshore-heights.jpeg'

const IMG = styled.img`
    height: calc(100vh - 64px);
    width: 100vw;
    margin: 0;
`

const LandingHero = () => {

    return (
        <IMG src={image} />
    )
}

export default LandingHero