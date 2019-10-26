import React, {useState, useGlobal} from 'reactn'
import styled from 'styled-components'
import client from '../../api/client'

const BuildingDiv = styled.div`
    box-sizing: border-box;
    z-index: 5;
    position: absolute;
    bottom: 50%;
    left: 25%;
    height: 25%;
    width: 50%;
    padding: 4rem;
    border-radius: 16px;
    background-color: white;
    transform: scale(${props => props.visible ? 1 : 0});


    transition: all .5s ease-in-out;
`

const BuildingForm = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-items: flex-start; */
`

const BuildingInput = styled.input`
    height: 40%;
    width: 45%;
    margin-bottom: 1rem;
    font-size: 2rem;
    border: none;
    border-bottom: 1px blue solid;
    outline: 0;
`

const BuildingSubmitButton = styled.button`
    font-size: 1.5rem;
    bottom: 10px;
    right: 10px;
    border: none;
    border-radius: 12px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    height: 60px;
    width: 100px;
    font-weight: bold;
`

const AddBuildingForm = (props) => {
    const initialState = {
        buildingNumber: "",
        address: "123 N Lakeshore Dr"
    }
    const [formState, setFormState] = useState({
        ...initialState
    })
    const { 0: token } = useGlobal('token')

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const { data } = await client.post( '/building', formState, {
            headers: {Authorization: `Bearer ${token}`}
        })

        setFormState(initialState)
        if(props.onSuccess) props.onSuccess()
    }

    return (
        <BuildingDiv visible={props.visible}>
            <BuildingForm onSubmit={handleSubmit}>
                <BuildingInput value={formState.buildingNumber} name="buildingNumber" onChange={handleChange} placeholder="Building #"></BuildingInput>
                <BuildingInput value={formState.address} name="address" onChange={handleChange} placeholder="Address"></BuildingInput>
                <BuildingSubmitButton>Submit</BuildingSubmitButton>
            </BuildingForm>
        </BuildingDiv>
    )
}

export default AddBuildingForm