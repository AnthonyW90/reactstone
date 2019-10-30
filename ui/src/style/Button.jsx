import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const BTN = styled.button`
    border: 1px solid ${props => props.theme.colors.highlight};
    border-radius: 8px;
    background-color: transparent;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin: 10px;
    outline: 0;

    transition: .8s;
    position: relative;
    overflow: hidden;

    z-index: 0;

    color: ${props => props.theme.colors.highlight};

    &:hover{
        color: ${props => props.theme.colors.background};
    }

    &::before{
        content: "";
        position: absolute;
        left: 0;
        height: 0%;
        width: 100%;
        background: ${props => props.theme.colors.highlight};
        z-index: -1;
        transition: .8s;

        top: 0;
        border-radius: 0 0 50% 50%;
    }

    &:hover::before{
        height: 180%;
    }
`

const BTNLink = styled(Link)`
    text-decoration: none;
`

export const AnimatedButton = (props) => {
    return(
        <BTNLink to={props.To ? props.To : '#'}>
            <BTN onClick={props.Click}>{props.Text ? props.Text : ''}</BTN>
        </BTNLink>
    )
}