import React, {useState, useGlobal} from 'reactn'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import client from '../api/client'
import { Body, Container, Card, CardTitle, CardText, Input, Button } from '../style/GeneralStyles'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Warning = styled.p`
    font-weight: 600;
    color: red;
    margin-bottom: 1rem;
`

const LoginLink = styled(Link)`

`

const ApplicationSignup = () => {
    const { 1: setLoggedIn } = useGlobal('loggedIn');
    const { 1: setToken } = useGlobal('token');
    const { 1: setUsername } = useGlobal('username');
    const { 1: setRole } = useGlobal('role');
    const [ status, setStatus ] = useGlobal('applicationStatus')
    const [ flag, setFlag ] = useState(false)
    const [ formState, setFormState ] = useState({
        username: "",
        password: "",
        passwordConfirm: "",
    })

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        if(formState.password === formState.passwordConfirm){
            await client.post('/user/create', formState);
            const { data } = await client.post('/user/login', formState)
            setLoggedIn(true);
            setToken(data.token);
            setUsername(data.username);
            setRole(data.role);
            setStatus("inProgress")
        } else {
            setFlag(true)
        }


    }

    return (
        <Body>
            <Container>
                <Card Width="400px">
                    <form onSubmit={handleSubmit}>
                        <CardTitle>Create your account</CardTitle>
                        <Content>
                            <Input required name="username" value={formState.username} onChange={handleChange}placeholder="Username"></Input>
                            <Input required name="password" value={formState.password} onChange={handleChange}type="password" placeholder="Password"></Input>
                            <Input required name="passwordConfirm" value={formState.passwordConfirm} onChange={handleChange}type="password" placeholder="Confirm Password"></Input>
                            {flag ? <Warning>Passwords to not match!</Warning> : ''}
                        </Content>
                        <Content>
                            <Button>SignUp</Button>
                            <CardText>
                                Or <LoginLink to="/login">login</LoginLink> to view your application status.
                            </CardText>
                        </Content>
                    </form>
                </Card>
            </Container>
        </Body>
    )
}

export default ApplicationSignup