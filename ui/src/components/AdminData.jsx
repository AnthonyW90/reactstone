import React, {useEffect, useState, useGlobal} from 'reactn';
import client from '../api/client'
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => props.theme.colors.gray};
    padding: 4rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr 1fr 1fr;
    grid-gap: 30px;
    justify-items: stretch;
`;

const Card = styled.div`
    background-color: white;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    grid-template-rows: 10% 1fr 10%;
    grid-template-areas: 
    ". . ."
    ". info ."
    ". title .";

    box-shadow: 10px 10px 11px -8px rgba(0,0,0,0.75);
`;

const CardInfo = styled.p`
    font-size: ${props => props.size || '128px'};
    font-weight: bold;
    color: ${props => props.theme.colors.gray};
    grid-area: info;
    justify-self: center;
    align-self: center;
`

const CardTitle = styled.p`
    margin: 1rem;
    grid-area: title;
    justify-self: center;
    align-self: end;
    font-size: 28px;
    color: ${props => props.theme.colors.gray};

`

const AdminData = () => {
    const { 0: token } = useGlobal('token')
    const [ residents, setResidents ] = useState([])
    const [ buildings, setBuildings ] = useState([])

    const getResidents = async () => {
        const { data } = await client.get('/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const residents = data.filter(person => person.role === 'resident')
        setResidents(residents)
    }

    const getBuildings = async () => {
        const { data } = await client.get('/building', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setBuildings(data)
    }

    useEffect(() => {
        getResidents()
        getBuildings()
    },[])
 
    return(
        <Container>
            <Card>
                <CardInfo>
                    {residents ? residents.length : ''}
                </CardInfo>
                <CardTitle>
                    Residents
                </CardTitle>
            </Card>
            <Card>
                <CardInfo>
                    {buildings ? buildings.length : ''}
                </CardInfo>
                <CardTitle>
                    Buildings
                </CardTitle>
            </Card>
            <Card>
                <CardInfo size="72px">
                    47 / 56
                </CardInfo>
                <CardTitle>
                    Occupied / Total
                </CardTitle>
            </Card>
            <Card>
                <CardInfo>
                    15
                </CardInfo>
                <CardTitle>
                    Open Tickets
                </CardTitle>
            </Card>
            <Card>
                <CardInfo>
                    2
                </CardInfo>
                <CardTitle>
                    Open Applications
                </CardTitle>
            </Card>
            <Card>
                <CardInfo size="72px">
                    $52,000
                </CardInfo>
                <CardTitle>
                    Monthly Income
                </CardTitle>
            </Card>
            <Card>
                <CardInfo>
                    idk
                </CardInfo>
                <CardTitle>
                    Stuff to fill
                </CardTitle>
            </Card>
            <Card>
                <CardInfo>
                    idk
                </CardInfo>
                <CardTitle>
                    Stuff to fill
                </CardTitle>
            </Card>
            <Card>
                <CardInfo size="72px">
                    $2,700
                </CardInfo>
                <CardTitle>
                    Estimated Maintenance Cost
                </CardTitle>
            </Card>
        </Container>
    );
};

export default AdminData;
