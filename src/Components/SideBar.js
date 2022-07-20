import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const SideBar = ({ navToggle }) => {
    return (
        <SideBarStyled className={`${navToggle ? 'nav-toggler' : ''}`}>
            <Navigation />
        </SideBarStyled>
    )
}
const SideBarStyled = styled.div`
    background-color: var(--sidebar-dark-color);
    height: 100vh;
    width: 13.3rem;
    position: fixed;
    overflow: hidden;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 1200px) {
        transform: translateX(-300px);
    }
`

export default SideBar
