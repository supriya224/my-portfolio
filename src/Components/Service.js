import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styled/Layout'
import Title from './Title'
import web from '../Assets/imgs/seo.png'
import api from '../Assets/imgs/api.png'


import ServiceCard from './ServiceCard'
const serviceArry = [
    {
        image: web,
        title: 'WebSite Developement',
        paragraph:
            'Reactwith typescript,Redux,React-Hooks,Formik,MaterialUi,Styled-components',
    },
    {
        image: api,
        title: 'Rest Api Developement',
        paragraph:
            'Rest Api using Nodejs expressjs or Nestjs with JWt,Bcrypt and Passportjs',
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
