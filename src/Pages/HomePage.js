import React, { useEffect } from 'react'
import styled from 'styled-components'
// import Particless from '../Components/Particles'
import ListAlt from '@material-ui/icons/AssessmentOutlined'
import FacebookIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const HomePage = ({ setTitle }) => {
    useEffect(() => setTitle('Home'), [setTitle])
    return (
        <HomeHeaderStyle>
            <div className="p-particle">
                {/* <Particless /> */}
                <div className="typography">
                    <h1>
                        Hi I'am <span>Supriya Maurya</span>
                    </h1>
                    <p>
                        "As a fresher, I bring a blank canvas eager to be filled
                        with experiences. While I may lack formal experience on
                        paper, I am ready to immerse myself fully in learning
                        and contributing to your team. After all, every
                        masterpiece begins with a single stroke "
                    </p>
                    <div className="icons">
                        <a
                            href="https://www.linkedin.com/in/supriya-maurya-34a85b1a7/"
                            className="icon i-facebook"
                            target="_blank"
                            rel="noreferrer">
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://github.com/supriya224"
                            className="icon i-github"
                            target="_blank"
                            rel="noreferrer">
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://stackoverflow.com/users/16771918/supriya-maurya"
                            className="icon i-stack"
                            target="_blank"
                            rel="noreferrer">
                            <ListAlt />
                        </a>
                    </div>
                </div>
            </div>
        </HomeHeaderStyle>
    )
}
const HomeHeaderStyle = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particle {
        /* position:absolute;
            top:0;
            left:0;
            width:100%; */
    }
    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 2px solid var(--border-color);
                transition: all 0.4s ease-in-out;
                &:hover {
                    cursor: pointer;
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                svg {
                    margin: 0.5rem;
                }
            }
            .i-facebook {
                &:hover {
                    border: 2px solid rgb(10 102 194);
                    color: rgb(10 102 194);
                }
            }
            .i-github {
                &:hover {
                    border: 2px solid var(--border-color);
                    color: var(--border-color);
                }
            }
            .i-stack {
                &:hover {
                    border: 2px solid #f48024;
                    color: #f48024;
                }
            }
        }
    }
`

export default HomePage
