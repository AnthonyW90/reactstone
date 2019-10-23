import React, { useEffect, useState, useGlobal } from 'reactn';
import client from '../api/client';
import styled from 'styled-components';

const Container = styled.div`
    padding: 4rem;
    margin: 0 auto;

    max-width: 1000px;
    min-width: 600px;

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
        '. . .'
        '. info .'
        '. title .';

    box-shadow: 10px 10px 11px -8px rgba(0, 0, 0, 0.75);
`;

const CardInfo = styled.p`
    font-size: ${props => props.size || '128px'};
    font-weight: bold;
    color: ${props => props.theme.colors.gray};
    grid-area: info;
    justify-self: center;
    align-self: center;
`;

const CardTitle = styled.p`
    margin: 1rem;
    grid-area: title;
    justify-self: center;
    align-self: end;
    font-size: 28px;
    color: ${props => props.theme.colors.gray};
`;

const AdminData = () => {
    const { 0: token } = useGlobal('token');
    const [residents, setResidents] = useState([]);
    const [buildings, setBuildings] = useState([]);
    const [apartments, setApartments] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [applications, setApplication] = useState([]);
    const [leases, setLeases] = useState([]);

    const getResidents = async () => {
        const { data } = await client.get('/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const residents = data.filter(person => person.role === 'resident');
        setResidents(residents);
    };

    const getBuildings = async () => {
        const { data } = await client.get('/building', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setBuildings(data);
    };

    const getApartments = async () => {
        const { data } = await client.get('/apartment', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setApartments(data);
    };

    const getTickets = async () => {
        const { data } = await client.get('/ticket', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setTickets(data);
    };

    const getApplications = async () => {
        const { data } = await client.get('/application', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setApplication(data);
    };

    const getLeases = async () => {
        const { data } = await client.get('/lease', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setLeases(data);
    };

    useEffect(() => {
        getResidents();
        getBuildings();
        getApartments();
        getTickets();
        getApplications();
        getLeases();
    }, []);

    return (
        <Container>
            <Card>
                <CardInfo>
                    {residents ? residents.length : 'loading...'}
                </CardInfo>
                <CardTitle>Residents</CardTitle>
            </Card>
            <Card>
                <CardInfo>
                    {buildings ? buildings.length : 'loading...'}
                </CardInfo>
                <CardTitle>Buildings</CardTitle>
            </Card>
            <Card>
                <CardInfo size='72px'>
                    {apartments
                        ? `${apartments.filter(e => e.tenant).length} / ${
                              apartments.length
                          }`
                        : 'loading...'}
                </CardInfo>
                <CardTitle>Occupied / Total</CardTitle>
            </Card>
            <Card>
                <CardInfo>
                    {tickets
                        ? `${
                              tickets.filter(
                                  e =>
                                      e.completed === false &&
                                      e.deleted === false
                              ).length
                          }`
                        : 'loading...'}
                </CardInfo>
                <CardTitle>Open Tickets</CardTitle>
            </Card>
            <Card>
                <CardInfo>
                    {applications
                        ? `${
                              applications.filter(e => e.status === 'open')
                                  .length
                          }`
                        : 'loading...'}
                </CardInfo>
                <CardTitle>Open Applications</CardTitle>
            </Card>
            <Card>
                <CardInfo size='72px'>
                    {leases
                        ? `${leases
                              .map(e => e.rent)
                              .reduce(
                                  (accumulator, currentValue) =>
                                      accumulator + currentValue,
                                  0
                              )}`
                        : 'loading...'}
                </CardInfo>
                <CardTitle>Monthly Income</CardTitle>
            </Card>
            <Card>
                <CardInfo>idk</CardInfo>
                <CardTitle>Stuff to fill</CardTitle>
            </Card>
            <Card>
                <CardInfo>idk</CardInfo>
                <CardTitle>Stuff to fill</CardTitle>
            </Card>
            <Card>
                <CardInfo size='72px'>
                    {tickets
                        ? `${tickets
                              .filter(
                                  e =>
                                      e.estimatedCost &&
                                      e.completed === false &&
                                      e.deleted === false
                              )
                              .map(e => e.estimatedCost)
                              .reduce(
                                  (accumulator, currentValue) =>
                                      accumulator + currentValue,
                                  0
                              )}`
                        : 'loading...'}
                </CardInfo>
                <CardTitle>Estimated Maintenance Cost</CardTitle>
            </Card>
        </Container>
    );
};

export default AdminData;
