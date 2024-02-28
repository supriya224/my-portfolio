import React from 'react'
import styled from 'styled-components'

const ResumeItem = ({ year, title, subTitle, text }) => {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
                {/* <p>Hellos</p> */}
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <div>
                    {Array.isArray(text) ? (
                        <>
                            {text.map((textData, ind) => {
                                return (
                                    <p key={ind} className="skill-contents">
                                        {textData}
                                    </p>
                                )
                            })}
                        </>
                    ) : (
                        <p>{text}</p>
                    )}
                </div>
            </div>
        </ResumeItemStyled>
    )
}
const ResumeItemStyled = styled.div`
    display: flex;
    &:not(:last-child) {
        padding-bottom: 2rem;
    }
    .left-content {
        width: 22%;
        max-width: 200px;

        /* padding: 0 20px 0 2rem; */
        padding-left: 20px;
        position: relative;
        /* background-color: red; */
        &::before {
            content: '';
            position: absolute;
            top: 10px;
            left: -7.8px;
            height: 13px;
            width: 13px;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p {
            display: inline-block;
            font-size: 0.8rem;
        }
    }
    .right-content {
        padding-left: 3rem;
        position: relative;
        width: 80%;
        /* background-color: white; */
        &::before {
            content: '';
            position: absolute;
            top: 17px;
            left: 0;
            height: 2px;
            width: 2.5rem;
            background-color: var(--border-color);
        }
        h5 {
            color: var(--primary-color);
            font-size: 1.5rem;
            padding-bottom: 0.3rem;
        }
        h6 {
            padding-bottom: 0.1rem;
            font-size: 0.9rem;
            color: var(--white-color);
        }
        p {
            word-break: break-all;
        }
        .skill-contents {
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 5px;
                left: -15px;
                height: 5px;
                width: 5px;
                border-radius: 50%;
                border: 1px solid var(--border-color);
                background-color: var(--primary-color);
            }
        }
    }
`

export default ResumeItem
