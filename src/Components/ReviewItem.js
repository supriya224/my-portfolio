import React from 'react'
import styled from 'styled-components'

const ReviewItem = ({ text }) => {
    return (
        <ReviewItemStyle>
            <p>{text}</p>
        </ReviewItemStyle>
    )
}

const ReviewItemStyle = styled.div`
    /* height:15vh; */
    padding: 1rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-gray);
    position: relative;
    width: 100%;

    @media screen and (max-width: 955px) {
    }
    &::after {
        content: '';
        position: absolute;
        left: 1rem;
        border-width: 0.8rem;
        /* bottom: 0; */
        border-style: solid;
        top: 100%;
        border-color: var(--background-dark-gray) transparent transparent
            var(--background-dark-gray);
    }
    p {
        padding: 1rem 0;
    }
`
export default ReviewItem
