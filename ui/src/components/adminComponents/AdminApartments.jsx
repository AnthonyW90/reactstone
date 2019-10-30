import React, { useGlobal, useState } from 'reactn';
import styled from 'styled-components'
import client from '../../api/client'
import BackButton from '../BackButton';
import {Container, Div, Title, Content} from '../../style/AdminLists'
import AddApartmentForm from './AddApartmentForm';

const AddButton = styled.button`
    position: absolute;
    font-size: 32px;
    color: white;
    bottom: 10px;
    left: 10px;
    border: none;
    border-radius: 12px;
    background-color: green;
    color: white;
    height: 60px;
    width: 80px;
    font-weight: bold;
    outline: 0;
    transform: translate(10px);
`;

const Apartment = ({apartment}) => {

    return (
        <Content align="grid">
            <p><strong>Unit {apartment.apartmentNumber}</strong></p>
            <p>Bedrooms: <strong>{apartment.bedRooms}</strong></p>
            <p>Bathrooms: <strong>{apartment.bathRooms}</strong></p>
            <p>Sq. Foot: <strong>{apartment.squareFoot}</strong></p>
            <p>Rent: <strong>{apartment.rent}</strong></p>
        </Content>
    )
}

const AdminApartments = () => {

    const [apartments, setApartments] = useGlobal('apartments')
    const { 0: token } = useGlobal('token')
    const { 1: setBuildings } = useGlobal('buildings')
    const [ visible, setVisible ] = useState(false)

    const handleSuccess = async () => {
        const apartments = await client.get('/apartment', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setApartments(apartments.data)

        const buildings = await client.get('/building', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setBuildings(buildings.data)

        setVisible(false)
    }

    return (
        <Div>
            <BackButton />
            <Container>
                <Div isCard>
                    <Title>Available</Title>
                    {apartments ? apartments.filter(apartment => !apartment.tenant).map(apartment => (<Apartment key={apartment._id} apartment={apartment}></Apartment>)) : 'Loading...'}
                </Div>
                <Div isCard>
                    <Title>Occupied</Title>
                    {apartments ? apartments.filter(apartment => apartment.tenant).map(apartment => (<Content key={apartment._id}>Unit {apartment.apartmentNumber}</Content>)) : 'Loading...'}
                </Div>
                <AddButton onClick={() => setVisible(!visible)}><i class="fas fa-plus"></i></AddButton>
                <AddApartmentForm visible={visible} onSuccess={handleSuccess}></AddApartmentForm>
            </Container>
        </Div>
    )
}

export default AdminApartments