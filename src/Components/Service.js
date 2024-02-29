import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styled/Layout'
import Title from './Title'
// import web from '../Assets/imgs/seo.png'
// import api from '../Assets/imgs/api.png'
// import seo from '../Assets/imgs/web.png'
// import mern from '../Assets/imgs/mern.png'

import ServiceCard from './ServiceCard'
const serviceArry = [
    {
        image: 'https://supriya224.github.io/my-portfolio/assets/api.png',
        title: 'WebSite Developement',
        paragraph:
            'Reactwith typescript,Redux,React-Hooks,Formik,MaterialUi,Styled-components',
    },
    {
        image: 'https://supriya224.github.io/my-portfolio/assets/web.png',
        title: 'SEO',
        paragraph:
            'Enhancing online visibility through strategic optimization for search engines, driving organic traffic and improving website rankings.',
    },
    {
        image: 'https://supriya224.github.io/my-portfolio/assets/seo.png',
        title: 'Page Performance',
        paragraph:
        'Enhances loading speed and overall web page performance by optimizing factors such as image sizes, code efficiency, and server response time',
    },
]

const Service = () => {
    return (
        <InnerLayout>
            <ServiceStyle>
                <Title title="Services" span="Services" />
                <div className="services">
                    {serviceArry.map((val) => (
                        <ServiceCard key={val.title} {...val} />
                    ))}
                </div>
            </ServiceStyle>
        </InnerLayout>
    )
}
const ServiceStyle = styled.section`
    .services {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 955px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default Service
