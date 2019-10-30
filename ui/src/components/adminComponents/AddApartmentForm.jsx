import React, {useState, useGlobal} from 'reactn'
import styled from 'styled-components'
import client from '../../api/client'

const ApartmentDiv = styled.div`
    box-sizing: border-box;
    z-index: 5;
    position: absolute;
    bottom: 50px;
    left: 25%;
    min-height: 25%;
    width: 50%;
    padding: 4rem;
    border-radius: 16px;
    background-color: white;
    transform: scale(${props => props.visible ? 1 : 0});


    transition: all .5s ease-in-out;
`

const ApartmentForm = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-items: flex-start; */
`

const ApartmentInput = styled.input`
    height: 50px;
    width: 200px;
    margin-bottom: 1rem;
    font-size: 2rem;
    border: none;
    border-bottom: 1px blue solid;
    outline: 0;
    
`

const ApartmentSubmitButton = styled.button`
    font-size: 1.5rem;
    bottom: 10px;
    right: 10px;
    border: none;
    border-radius: 12px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    height: 50px;
    width: 100px;
    font-weight: bold;
`

const ApartmentSelect = styled.select`
    height: 50px;
    width: 200px;
    margin-bottom: 1rem;
    font-size: 1.25rem;
`

const ApartmentOption = styled.option`

`

const AddApartmentForm = (props) => {
    const initialState = {
        apartmentNumber: "",
        building: ""
    }

    const [formState, setFormState] = useState({
        ...initialState
    })

    const { 0: token } = useGlobal('token')
    const { 0: buildings } = useGlobal('buildings')

    const handleChange = async e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        await client.post('/apartment', formState, {
            headers: {Authorization: `Bearer ${token}`}
        })

        setFormState(initialState)
        if(props.onSuccess) props.onSuccess()
    }

    return(
        <ApartmentDiv visible={props.visible}>
            <ApartmentForm onSubmit={handleSubmit}>
                <ApartmentInput autoFocus value={formState.apartmentNumber} name="apartmentNumber" onChange={handleChange} placeholder="Unit #"></ApartmentInput>
                <ApartmentSelect onChange={handleChange} name="bedRooms">
                    <ApartmentOption>Bed</ApartmentOption>
                    <ApartmentOption value="1">1 Bedroom</ApartmentOption>
                    <ApartmentOption value="2">2 Bedrooms</ApartmentOption>
                    <ApartmentOption value="3">3 Bedrooms</ApartmentOption>
                </ApartmentSelect>
                <ApartmentSelect onChange={handleChange} name="bathRooms">
                    <ApartmentOption>Bath</ApartmentOption>
                    <ApartmentOption value="1">1 Bathroom</ApartmentOption>
                    <ApartmentOption value="2">2 Bathrooms</ApartmentOption>
                </ApartmentSelect>
                <ApartmentSelect onChange={handleChange} name="squareFoot">
                    <ApartmentOption>Sq.Foot</ApartmentOption>
                    <ApartmentOption value="750">750 Sq. Foot</ApartmentOption>
                    <ApartmentOption value="812">812 Sq. Foot</ApartmentOption>
                    <ApartmentOption value="900">900 Sq. Foot</ApartmentOption>
                    <ApartmentOption value="1200">1200 Sq. Foot</ApartmentOption>
                    <ApartmentOption value="1600">1600 Sq. Foot</ApartmentOption>
                </ApartmentSelect>
                <ApartmentSelect onChange={handleChange} name="building">
                    <ApartmentOption>Building</ApartmentOption>
                    {buildings ? buildings.sort((a,b) => (a.buildingNumber - b.buildingNumber)).map(building => (
                        <ApartmentOption key={building._id} value={building._id}>Building {building.buildingNumber}</ApartmentOption>
                    )) : ''}
                </ApartmentSelect>
                {console.log(formState)}
                <ApartmentSubmitButton>Submit</ApartmentSubmitButton>
            </ApartmentForm>
        </ApartmentDiv>
    )
}

export default AddApartmentForm