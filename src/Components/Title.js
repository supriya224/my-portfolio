import React from 'react'
import styled from 'styled-components'

const Title = ({ title, span }) => {
    return (
        <TitleStyle>
            <h2>
                {title}
                <b>
                    {' '}
                    <span>{span}</span>
                </b>
            </h2>
        </TitleStyle>
    )
}
const TitleStyle = styled.div`
    position: relative;
    h2 {
        color: var(--white-color);
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        &::before {
            width: 7rem;
            content: '';
            position: absolute;
            bottom: 0;
            height: 0.33rem;
            background-color: var(--background-light-color-2);
            border-radius: 12px;
            left: 0;
        }
        &::after {
            width: 3.5rem;
            content: '';
            position: absolute;
            bottom: 0;
            height: 0.33rem;
            background-color: var(--primary-color);
            border-radius: 12px;
            left: 0;
        }
        span {
            color: rgba(25, 29, 43, 0.44);
            font-weight: 700;
            font-size: 4rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }
`

export default Title
