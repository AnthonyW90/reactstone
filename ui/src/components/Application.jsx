import React, {useState, useGlobal, useEffect} from 'reactn'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import client from '../api/client'
import { Body, Container, Card, CardTitle, CardText, Input, Button } from '../style/GeneralStyles'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
`

const Group = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1rem;
    background-color: white;

    .bankruptcy {
        width: 250px;
        background-color: ${props => props.theme.colors.secondary};
    }

    .evicted {
        width: 250px;
        background-color: white;
    }

    Input {
            background-color: transparent;
    }

    &:nth-child(odd){
        background-color: ${props => props.theme.colors.secondary};

        Input{
            border-bottom: 1px #16425B solid;
        }
    }

`

const Label = styled.label`
    width: 30%;
`

const Select = styled.select`
    width: 120px;
    height: 40px;
`

const Option = styled.option`
`

const Application = () => {
    const [ formState, setFormState ] = useState({})
    const { 0: token } = useGlobal('token')
    const [ apartments, setApartments ] = useGlobal('apartments')
    const { 0: username } = useGlobal('username')

    const getApartments = async () => {
        const { data } = await client.get('/apartment/available', {
            headers: {Authorization: `Bearer ${token}`}
        })
        setApartments(data)
    } 

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        await client.post('/application/', formState, {
            headers: {Authorization: `Bearer ${token}`}
        })
    }

    useEffect(() => {
        getApartments()
        setFormState({
            ...formState,
            applicant: token
        })
    }, [])

    return (
        <Body>
            {console.log(formState)}
            <Container>
                <Card>
                    <form onSubmit={handleSubmit}>
                        <CardTitle>Rental Application</CardTitle>
                        <Group>
                        <CardText>Welcome, {username}</CardText>
                            <div>
                                <Label htmlFor="apartment">Select a Unit </Label>
                                <Select id="apartment" required onChange={handleChange} name="apartment">
                                    <Option>---</Option>
                                    {apartments ? apartments.sort((a, b) => a.apartmentNumber - b.apartmentNumber).map(apartment => (<Option key={apartment._id} value={apartment._id}>Unit {apartment.apartmentNumber}</Option>)) : ''}
                                </Select>
                            </div>
                        </Group>
                        <Content>
                            <Group>
                                <Label htmlFor="firstName">First Name: </Label>
                                <Input required onChange={handleChange} value={formState.firstName} type="text" id="firstName" name="firstName"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="lastName">Last Name: </Label>
                                <Input required onChange={handleChange} value={formState.lastName} type="text" id="lastName" name="lastName"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="phoneNumber">Phone #: </Label>
                                <Input required onChange={handleChange} value={formState.phoneNumber} type="text" id="phoneNumber" name="phoneNumber"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="email">Email: </Label>
                                <Input required onChange={handleChange} value={formState.email} type="email" id="email" name="email"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="income">Yearly Income: </Label>
                                <Input required onChange={handleChange} value={formState.income} type="text" id="income" name="income"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="occupants"># of Occupants: </Label>
                                <Input required onChange={handleChange} value={formState.occupants} type="number" id="occupants" name="occupants"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="previousStreetAddress">Previous Street Address: </Label>
                                <Input required onChange={handleChange} value={formState.previousStreetAddress} type="text" id="previousStreetAddress" name="previousStreetAddress"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="previousCity">Previous City: </Label>
                                <Input required onChange={handleChange} value={formState.previousCity} type="text" id="previousCity" name="previousCity"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="previousState">Previous State: </Label>
                                <Input required onChange={handleChange} value={formState.previousState} type="text" id="previousState" name="previousState"></Input>
                            </Group>
                            <Group>
                                <Label htmlFor="previousZip">Previous Zip: </Label>
                                <Input required onChange={handleChange} value={formState.previousZip} type="text" id="previousZip" name="previousZip"></Input>
                            </Group>
                            <Group>
                                <CardText>Have you ever filed for bankruptcy?</CardText>
                                <Group className="bankruptcy">
                                    <Label htmlFor="bankruptcyYes">Yes</Label>
                                    <Input required onChange={handleChange} value={formState.bankruptcy} type="radio" id="bankruptcyYes" name="bankruptcy" value={true}></Input>
                                    <Label htmlFor="bankruptcyNo">No</Label>
                                    <Input required onChange={handleChange} value={formState.bankruptcy} type="radio" id="bankruptcyNo" name="bankruptcy" value={false}></Input>
                                </Group>
                            </Group>
                            <Group>
                            <CardText>Have you ever been evicted?</CardText>
                                <Group className="evicted">
                                    <Label htmlFor="evictedYes">Yes</Label>
                                    <Input required onChange={handleChange} value={formState.evicted} type="radio" id="evictedYes" name="evicted" value={true}></Input>
                                    <Label htmlFor="evictedNo">No</Label>
                                    <Input required onChange={handleChange} value={formState.evicted} type="radio" id="evictedNo" name="evicted" value={false}></Input>
                                </Group>
                            </Group>
                        </Content>
                        <Group className="btn">
                            <Button>Submit</Button>
                        </Group>
                    </form>
                </Card>
            </Container>
        </Body>
    )
}

export default Application