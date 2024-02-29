import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MainLayout } from '../Styled/Layout'
import Title from '../Components/Title'
import ImageSection from './ImageSection'
import Service from '../Components/Service'
import ReviewSection from '../Components/ReviewSection'

const AboutPage = ({ setTitle }) => {
    useEffect(() => setTitle('About'), [])

    return (
        <MainLayout>
            <AboutStyle>
                <Title title="About me" span="About me" />
                <ImageSection />
                <Service />
                <ReviewSection />
            </AboutStyle>
        </MainLayout>
    )
}

const AboutStyle = styled.section``
export default AboutPage
