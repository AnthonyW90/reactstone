import React, { useState, useGlobal } from 'reactn'
import { Redirect } from 'react-router-dom'
import client from '../api/client'
import styled from 'styled-components'
import bg from '../assets/images/gallery1.jpeg'

const Body = styled.div`
    height: calc(100vh - 64px);
    width: 100vw;
    background: url(${bg});
    background-size: cover;
`

const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 40px;
    background: rgba(0,0,0,.6);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.5);
    border-radius: 10px;
`
const H2 = styled.h2`
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;

`

const Form = styled.form`

`

const InputBox = styled.div`
    position: relative;
`
const Input = styled.input`
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;

    &:focus ~ Label, &:valid ~ Label {
        top: -18px;
        left: 0;
        color: #03a9f4;
        font-size: 12px;
    }
`
const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
`

const SubmitButton = styled.button`
    background: transparent;
    margin: auto;
    border: none;
    outline: none;
    color: #fff;
    background: #03a9f4;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
`

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
        <Body>
            <Box>
                <H2>Login</H2>
                <Form onSubmit={handleSubmit}>
                    <InputBox>
                        <Input type="text" name="username" value={formState.username} required onChange={handleChange}></Input>
                        <Label>Username</Label>
                    </InputBox>
                    <InputBox>
                        <Input type="password" name="password" value={formState.password} required onChange={handleChange}></Input>
                        <Label>Password</Label>
                    </InputBox>
                    <SubmitButton>Login</SubmitButton>
                </Form>
            </Box>
            {loggedIn ? <Redirect to="/"></Redirect> : ''}
        </Body>
    )
}

export default LoginPage