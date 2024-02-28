import React from 'react'
import styled from 'styled-components'

const PrimaryButton = ({ title, ...rest }) => {
    return <PrimaryButtonStyle {...rest}>{title}</PrimaryButtonStyle>
}

const PrimaryButtonStyle = styled.a`
    background-color: var(--primary-color);
    padding: 0.6rem 2rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all 0.4s ease-in-out;
    &::after {
        content: '';
        opacity: 0.6;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.2rem;
        transition: all 0.4s ease-in-out;
    }
    &:hover::after {
        width: 100%;
        background-color: var(--white-color);
    }
    @media screen and (max-width: 420px) {
        width: 100%;
        text-align: center;
    }
`

export default PrimaryButton
