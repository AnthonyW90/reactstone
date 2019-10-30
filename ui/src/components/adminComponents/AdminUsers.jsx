import React, { useGlobal } from 'reactn';
import BackButton from '../BackButton';
import {Container, Div, Title, Content} from '../../style/AdminLists'


const AdminUsers = () => {
    const [users, setUsers] = useGlobal('users');

    return (
        <Div>
            <BackButton />
            <Container>
                <Div isCard>
                    <Title>Admin</Title>
                    {users ? users
                        .filter(user => user.role === 'admin')
                        .map(user => (
                            <Content key={user._id}>
                                {user.lastName}, {user.firstName}
                            </Content>
                        )) : 'Loading...'}
                </Div>
                <Div isCard>
                    <Title>Managers</Title>
                    {users ? users
                        .filter(user => user.role === 'manager')
                        .map(user => (
                            <Content key={user._id}>
                                {user.lastName}, {user.firstName}
                            </Content>
                        )) : 'Loading...'}
                </Div>
                <Div isCard>
                    <Title>Maintenance</Title>
                    {users ? users
                        .filter(user => user.role === 'maintenance')
                        .map(user => (
                            <Content key={user._id}>
                                {user.lastName}, {user.firstName}
                            </Content>
                        )) : 'Loading...'}
                </Div>
                <Div isCard>
                    <Title>Applicants</Title>
                    {users ? users
                        .filter(user => user.role === 'applicant')
                        .map(user => (
                            <Content key={user._id}>
                                {user.lastName}, {user.firstName}{console.log(user)}
                            </Content>
                        )) : 'Loading...'}
                </Div>
                <Div isCard>
                    <Title>Residents</Title>
                    {users ? users
                        .filter(user => user.role === 'resident')
                        .map(user => (
                            <Content key={user._id}>
                                {user.lastName}, {user.firstName}
                            </Content>
                        )) : 'Loading...'}
                </Div>
            </Container>
        </Div>
    );
};

export default AdminUsers;
