import React from 'react'
import styled from 'styled-components'
import Github from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LinkedInIcon from '@material-ui/icons/Language'
const Menu = ({ menuItems }) => {
    return (
        <MenuItemStyled>
            {menuItems.map((menuItem) => {
                return (
                    <div className="grid-item" key={menuItem.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={menuItem.image} alt="" />
                                <ul>
                                    <li>
                                        <a href={menuItem.github}>
                                            <Github />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={menuItem.linkedin}>
                                            <LinkedInIcon />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h6>{menuItem.title}</h6>
                            <p>{menuItem.text}</p>
                        </div>
                    </div>
                )
            })}
        </MenuItemStyled>
    )
}
const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.7rem;
    .grid-item {
        .portfolio-content {
            display: block;
            position: relative;
            overflow: hidden;
            h6 {
                font-size: 1.2rem;
                color: var(--white-color);
            }
            p {
                font-size: 0.8rem;
                color: var(--secondary-color);
                word-break: break-all;
            }
            img {
                width: 100%;
                object-fit: cover;
            }
            ul {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateY(-500px);
                transition: all 0.4s ease-in-out;
                opacity: 0;

                li {
                    background-color: var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.7rem;
                    border-radius: 50%;
                    margin: 0 0.3rem;
                    height: 2rem;
                    width: 2rem;
                }
            }
            .portfolio-image {
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    top: 5%;
                    left: 5%;
                    transform: scale(0);
                    height: 0;
                    width: 0;
                    transition: all 0.4s ease-in-out;
                }
            }
            .portfolio-image:hover {
                ul {
                    transform: translateY(0);

                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 1;

                    li {
                        transition: all 0.4s ease-in-out;
                        &:hover {
                            background-color: var(--primary-color);
                        }
                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    svg {
                        font-size: 1.8rem;
                    }
                }
                &::before {
                    height: calc(100% - 10%);
                    width: calc(100% - 10%);
                    background-color: white;
                    opacity: 0.9;
                    transform-origin: left;
                    transform: scale(1);
                }
            }
        }
    }
    /* media queries */
    @media screen and (max-width: 975px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default Menu
