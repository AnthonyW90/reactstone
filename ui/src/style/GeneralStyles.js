import styled from 'styled-components'

export const Body = styled.div`
    min-height: calc(100vh - 98px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    margin: 2rem;
`

export const Button = styled.button`
    margin-bottom: 1rem;
    height: ${props => props.Height || '40px'};
    width: ${props => props.Width || '120px'};
    font-size: ${props => props.FontSize || '24px'};
    border: none;
    border-radius: ${props => props.BorderRadius || '8px'};
    background-color: ${props => props.BackgroundColor || props.theme.colors.primary};
    color: ${props => props.Color || 'white'};
    outline: 0;
    transition: .5s all;

    &:hover{
        background-color:${props => props.HighlightColor || props.theme.colors.secondary};
    }
`

export const Card = styled.div`
    height: ${props => props.Height || ''};
    width: ${props => props.Width || ''};
    border-radius: ${props => props.BoarderRadius || '16px'};
    box-shadow: ${props => props.NoBoxShadow ? '' : '0px 8px 16px 0px rgba(133,133,133,1)'};
    padding: ${props => props.Padding || '1rem'};
    overflow: hidden;
`

export const CardTitle = styled.p`
    font-size: 32px;
    margin-bottom: 2rem;
`

export const CardText = styled.p`
    margin: 1rem;
`

export const Input = styled.input`
    height: ${props => props.Height || '40px'};
    width: ${props => props.Width || '100%'};
    margin-bottom: 1rem; 
    border: none;
    border-bottom: 1px #16425B solid;
    outline: 0;
    font-size: 24px;
`