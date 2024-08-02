import React from 'react'
import styled from 'styled-components'

const ProgressBar = ({ title, width, text }) => {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{ width: width }}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
  
    .progress-bar {
        display: flex;
        align-items: center;
        p {
            padding-right: 1rem;
            color: var(--secondary-color);
            font-size: 0.9rem;
        }
    }
    .progress {
        position: relative;
        width: 100%;
        height: 0.3rem;
        background-color: var(--border-color);
        border-radius: 4px;
        span {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            border-radius: 4px;

            background-color: var(--primary-color);
        }
    }
`

export default ProgressBar
