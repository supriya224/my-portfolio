import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../Assets/imgs/img.jpeg'
import SwingItem from './SwingItem'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" loading='lazy' />
                <div className="swing-section">
                    <SwingItem
                        icons={<GitHubIcon />}
                        href="https://github.com/supriya224"
                    />
                    <SwingItem
                        icons={<LinkedInIcon />}
                        primary={true}
                        href="https://www.linkedin.com/in/supriya-maurya-34a85b1a7/"
                    />
                </div>
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/my-portfolio" activeClassName="nav-active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="nav-active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="nav-active">
                        Resume
                    </NavLink>
                </li>{' '}
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="nav-active">
                        PortFolio
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="nav-active">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>&#169;2024 Supriya Portfolio WebSite</p>
            </footer>
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-right: 1px solid var(--border-color);
    /* position: relative; */

    .anim {
        animation: bounce2 2s ease infinite;
        @keyframes bounce2 {
            0%,
            20%,
            50%,
            80%,
            100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }
    }
    .avatar {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        position: relative;
        /* padding: 3rem; */
        .swing-section {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-evenly;
            position: absolute;
            left: 0%;
            top: 100%;
        }
        img {
            width: 40%;
            height: 100%;
            border-radius: 100%;
            border: 8px solid var(--border-color);
        }
    }
    .nav-items {
        width: 100%;
        text-align: center;
        .nav-active {
            background-color: var(--primary-color);
        }
        li {
            display: block;
            a {
                display: block;
                position: relative;
                padding: 0.2rem 0;
                letter-spacing: 1px;
                text-transform: uppercase;
                transition: all 0.4s ease-in-out;
                &:hover {
                    cursor: pointer;
                }
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: all 0.4s cubic-bezier(1, -0.22, 0.32, 0.95);
                    opacity: 0.21;
                    transform-origin: top;
                }
            }
            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }
    .footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        p {
            font-size: 1rem;
            padding: 0.6rem 0;
            text-align: center;
            display: block;
        }
    }
`

export default Navigation
