import React, { useState, useGlobal } from 'reactn';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import client from '../api/client';

const Div = styled.div`
    height: calc(100vh - 64px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const Form = styled.form`
    height: 80%;
    width: 80%;
    min-width: 400px;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
`;

const Input = styled.input`
    width: 50%;
    height: 36px;
    margin: 1rem;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.primary};

    &:active {
        outline: none;
    }
`;

const LoginPage = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });

    const [loggedIn, setLoggedIn] = useGlobal('loggedIn');
    const { 1: setToken } = useGlobal('token');
    const { 1: setUsername } = useGlobal('username');
    const { 1: setRole } = useGlobal('role');

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const { data } = await client.post('/user/login', formState);

        setLoggedIn(true);
        setToken(data.token);
        setUsername(data.username);
        setRole(data.role);
    };

    const handleLogin = e => {
        setFormState({
            username: e.target.value.split(',')[0],
            password: e.target.value.split(',')[1],
        });
    };

    return (
        <Div>
            <Form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={formState.username}
                    onChange={handleChange}></Input>
                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formState.password}
                    onChange={handleChange}></Input>
                <select onChange={handleLogin}>
                    <option value=''>---</option>
                    <option value='admin,password'>Admin</option>
                    <option value='manager,password'>Manager</option>
                    <option value='maintenance,password'>Maintenance</option>
                    <option value='resident,password'>Resident</option>
                    <option value='user,password'>User</option>
                </select>
                <button>Login</button>
                {loggedIn ? <Redirect to='/'></Redirect> : ''}
            </Form>
        </Div>
    );
};

export default LoginPage;
