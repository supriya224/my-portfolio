import React, { useState, useEffect } from 'react'
import { MainLayout, InnerLayout } from '../Styled/Layout'
import Title from '../Components/Title'
import { portfolios } from '../Contant/Const'
import Menu from '../Components/Menu'
import Buttons from '../Components/Buttons'

const allButtons = ['All', ...new Set(portfolios.map((item) => item.category))]
const PortfolioPage = ({ setTitle }) => {
    useEffect(() => setTitle('Portfolio'), [])

    const [menuItems, setMenuItems] = useState(portfolios)
    const [buttons, setButtons] = useState(allButtons)
    const filter = (button) => {
        if (button === 'All') {
            setMenuItems(portfolios)
            return
        }
        const filteredData = portfolios.filter(
            (portfolio) => portfolio.category === button
        )
        setMenuItems(filteredData)
    }
    return (
        <MainLayout>
            <Title title="PortFolio" span="PortFolio" />
            <InnerLayout>
                <Buttons filter={filter} buttons={buttons} />
                <Menu menuItems={menuItems} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfolioPage
