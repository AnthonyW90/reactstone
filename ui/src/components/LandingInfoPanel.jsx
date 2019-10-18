import React from 'react';
import styled from 'styled-components';
import Card from './Card';

import floorplan from '../assets/images/floorplan-logo.png'
import community from '../assets/images/community-logo.png'
import amenities from '../assets/images/amenities-logo.png'

const InfoPanel = styled.div`
    margin: -3px 0 0 0;
    padding: 10vh 0;
    width: 100vw;
    background-color: ${props => props.color || props.theme.colors.background};
    display: flex;
    justify-content: space-evenly;
`;

const LandingInfoPanel = () => {
    return (
    <InfoPanel>
        <Card>
            <h3>Floor Plans</h3>
            <img src={ floorplan } alt="floorplan logo" width="128px"/>
        </Card>
        <Card>
            <h3>Community</h3>
            <img src={ community } alt="community logo" width="128px"/>
        </Card>
        <Card>
            <h3>Amenities</h3>
            <img src={ amenities } alt="amenity logo" width="128px"/>
        </Card>
    </InfoPanel>
    );
};

export default LandingInfoPanel;
