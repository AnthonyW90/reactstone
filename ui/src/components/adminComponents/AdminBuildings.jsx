import React, { useGlobal, useState } from 'reactn';
import styled from 'styled-components'
import { Container, Div, Title, Content } from '../../style/AdminLists';
import client from '../../api/client'
import BackButton from '../BackButton';
import AddBuildingForm from './AddBuildingsForm';

const AddButton = styled.button`
    position: sticky;
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
    transform: translate(20px);
`;


const AdminBuildings = () => {
    const {0:token} = useGlobal('token')
    const [buildings, setBuildings] = useGlobal('buildings');
    const [visible, setVisible] = useState(false);

    const handleSuccess = async () => {
        const { data } = await client.get('/building', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setBuildings(data);
        setVisible(false)
    }

    return (
        <Div>
            <BackButton />
            <Container>
                {buildings ? buildings.sort((a,b) => (a.buildingNumber - b.buildingNumber)).map(building => (
                    <Div key={building._id} isCard>
                        <Title>Building {building.buildingNumber}</Title>
                        {building.apartments.map(apartment => (
                            <Content key={apartment._id}>
                                Unit {apartment.apartmentNumber}
                            </Content>
                        ))}
                    </Div>
                )) : 'Loading...'}
            </Container>
            <AddButton onClick={() => setVisible(!visible)}><i class="fas fa-plus"></i></AddButton>
            <AddBuildingForm visible={visible} onSuccess={handleSuccess}/>
        </Div>
    );
};

export default AdminBuildings;
