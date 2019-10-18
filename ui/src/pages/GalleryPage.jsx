import React from 'reactn';
import styled from 'styled-components';

import img1 from '../assets/images/gallery1.jpeg';
import img2 from "../assets/images/gallery2.jpeg"
import img3 from "../assets/images/gallery3.jpeg"
import img4 from "../assets/images/gallery4.jpeg"
import img5 from "../assets/images/gallery5.jpeg"
import img6 from "../assets/images/gallery6.jpeg"
import img7 from "../assets/images/gallery7.jpeg"
import img8 from "../assets/images/gallery8.jpg"
import img9 from "../assets/images/gallery9.jpg"
import img10 from "../assets/images/gallery10.jpeg"
import img11 from "../assets/images/gallery11.jpeg"
import img12 from "../assets/images/gallery12.jpeg"

const Div = styled.div`
    width: 100vw;
    background-color: ${props => props.theme.colors.gray};
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1200px;
`;

const Photo = styled.img`
    border: 8px white solid;
    margin: 2rem;
    border-radius: 8px;
    max-width: 300px;
    height: 275px;

    transition: all .5s;

    &:hover {
        transform: scale(1.25);
        box-shadow: 6px 6px 16px 0px rgba(0,0,0,0.75);
    }
`;

const GalleryPage = () => {
    return (
        <Div>
            <Container>
                <Photo src={img1} />
                <Photo src={img6}/>
                <Photo src={img4}/>
                <Photo src={img5}/>
                <Photo src={img9}/>
                <Photo src={img2}/>
                <Photo src={img8}/>
                <Photo src={img7}/>
                <Photo src={img3}/>
                <Photo src={img11}/>
                <Photo src={img10}/>
                <Photo src={img12}/>
            </Container>
        </Div>
    );
};

export default GalleryPage;
