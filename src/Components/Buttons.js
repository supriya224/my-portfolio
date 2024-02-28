import React from 'react'
import styled from 'styled-components'

const Buttons = ({ filter, buttons }) => {
    return (
        <ButtonsStyled>
            {buttons.map((button, i) => {
                return (
                    <ButtonStyled key={i} onClick={() => filter(button)}>
                        {button}
                    </ButtonStyled>
                )
            })}
        </ButtonsStyled>
    )
}
const ButtonStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: 0.4rem 1rem;
    color: var(--white-color);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
        background-color: var(--primary-color);
    }
    &:active,
    &:focus {
        background-color: var(--primary-color);
        border-bottom: 2px solid white;
    }
    &:not(:last-child) {
        margin-right: 0.5rem;
    }
    @media screen and (max-width: 990px) {
        margin-bottom: 0.6rem;
    }
`
const ButtonsStyled = styled.div`
    /* margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 1.9rem auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1.7rem;
    @media screen and (max-width: 800px) {
        width: 90%;
        flex-wrap: wrap;
    }
`

export default Buttons
