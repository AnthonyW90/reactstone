import styled from 'styled-components'

export const Container = styled.div`
    padding: 4rem;
    margin: 0 auto;

    max-width: 1000px;
    min-width: 600px;
`;

export const Div = styled.div`
    margin-top: 2rem;
    position: relative;

    box-shadow: ${props => props.isCard ? '0px 10px 12px 0px rgba(87,87,87,1)' : ''};

    border-radius: ${props => props.isCard ? '16px' : ''};
`;

export const Title = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    width: 100%;
    border-radius: 16px 16px 0 0;

    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.highlight};

    font-size: 32px;
    font-weight: bold;
`;

export const Content = styled.div`
    box-sizing: border-box;
    padding: 1rem 1rem 1rem 3rem;
    width: 100%;
    border-radius: 0 0 0 0;

    background-color: ${props => props.theme.colors.secondary};

    font-size: 28px;

    border-bottom: 1px white solid;

    display: ${props => props.align || 'block'};
    grid-template-columns: 1fr 1fr 1fr;

    &:last-child {
        border-radius: 0 0 16px 16px;
        border-bottom: none;
    }
`;
