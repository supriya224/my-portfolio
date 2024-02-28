import React from 'react'
import styled from 'styled-components'

const SwingItem = ({ icons, primary, href }) => {
    return (
        <SwingItemStyled primary={primary}>
            <ShapeRope primary={primary}></ShapeRope>
            <ShapeDiv primary={primary} href={href} target="_blank">
                {icons}
            </ShapeDiv>
        </SwingItemStyled>
    )
}
const ShapeDiv = styled.a`
    width: 24px;
    height: 24px;
    display: block;
    background-color: ${(props) =>
        props.primary ? 'var(--primary-color)' : 'var(--border-color)'};
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    svg {
        color: var(--white-color);
    }
`
const ShapeRope = styled.div`
    height: 20px;
    width: 1px;
    background-color: ${(props) =>
        props.primary ? 'var(--primary-color)' : '#151515'};
    content: '';
    display: block;
    margin-left: 50%;
    bottom: 54px;
`
const SwingItemStyled = styled.div`
    animation: sway 2.4s infinite;
    animation-timing-function: ease-in-out;
    -webkit-transform-origin: top;
    -moz-transform-origin: top;
    transform-origin: top;
    height: 500px;

    @keyframes sway {
        0% {
            transform: rotate(8deg);
        }
        50% {
            transform: rotate(-8deg);
        }
        100% {
            transform: rotate(8deg);
        }
    }
`

export default SwingItem
