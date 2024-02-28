import React from 'react'
import styled from 'styled-components'
import {InnerLayout } from '../Styled/Layout'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'
const resumeContents = [
    {
        id: 1,
        year: 'Nov 2021-Present',
        title: 'Software Engineer ',
        subTitle: '[BitClass] , Banglore, karnataka,India',
        text: [
            'Implemented new responsive, mobile-first approach which increased mobile traffic by 20%.',
            'Improve company retention from 12% to 20% with QuickBit feature by this feature we increase cash flow approx 18%.',
            'Rewrote jsx to meet industry and company standard for SEO and accessibility .',
            'Mentor 2 junior frontend developer team in expanding javascript,next js,Reactjs skill-set .',
            'Contributed in house UI library to create re- useable component that save over 100 hours of development time per month.',
            'Worked closely with product and marketing team to redesign and improve the UI for activation and retention the user.',
            'Worked on payments team to save over 10000 customers time & improve cash flow through the development and modern responsive customer experience .',
            'Boosted conversion rate up to 46% by design and improvement .',
            'Migrate full feature app in next js with handling of 1000 daily active users.',
        ],
    },
    {
        id: 2,
        year: 'Sep 2021-Nov 2021',
        title: 'Software Developer',
        subTitle: '[Questt], Banglore,karnataka,India',
        text: [
            'Make teacher dashboard for teacher journey on Web.',
            'Building fully feature teacher on boarding journey on web with React ,Redux , react hooks, redux saga for side effects, and Styled components.',
            'React with typescript ,Redux with Immer js,Redux Saga ,React hooks,Material UI ,JWT',
            'Made 10 Page with dynamic Data with api OTP verification.',
            'Landing page chrome light-house score reached to 83%',
        ],
    },
    {
        id: 3,
        year: 'Jan 2020-March 2021',
        title: 'Sonftware Developer',
        subTitle: '[Navana Tech] ,Banglore,karnataka,India',
        text: [
            'Building fully-functional CMS for managing chatbot events along with chatbot UI and placement on the screen of chatbot via CMS.',
            ' React ,Redux with Immer js, React hooks,Material UI ,JWT and React router dom etc are the main library that I have used for making product appearance, components logic.',
            'Optimization purpose using react-dev-tools and useMemo hooks.',
            'Maintained the code quality, linting, eﬀective PR.',
            "Involved in all web development life-cycle from translating designs into high-quality code from scratch, deployment and it's maintenance.",
        ],
    },
    {
        id: 4,
        year: 'Aug 2020- Dec 2021',
        title: 'Web Developer',
        subTitle: 'NxtLife technologies in Gurgaon,Haryana,India',
        text: [
            'Making hybrid app by using Ionic framework and perform rest api with Asyc await.',
            'Made webPages using Angular8 rxjs and reusable atomic, isolated, optimized components with scalable code.',
            'Deployment knowledge using Heroku and Ec2 with Docker images. Familiear with Jenkins and Nginx.',
        ],
    },
    {
        id: 5,
        year: 'Aug 2018-Sept 2018',
        title: 'FrontEnd Developer',
        subTitle: 'CureOre.com in Bhopal,Madhaya-Pradesh,India',
        text: [
            'Learn Angular 6 and its core concept with RXJS.',
            'Making Component and passing data to it . ',
            'AWS service for Serverless microservices learn and made using by (S3,AWS lamda,dynamoDB,IMA) and deployed webPages on EC2.',
        ],
    },
]
const educationalContents = [
    {
        id: 1,
        year: 'Dec 2020-Sept 2023',
        title: 'Bachelor of Engineering ',
        subTitle: 'Veer Bahadur Singh purvanchal University, Jaunpur,UP',
        text: 'Information Technology with 7.4CGPA',
    },
    {
        id: 2,
        year: 'July 2018 - Oct 2020',
        title: 'Diploma',
        subTitle: 'Government Girls Polytechnic Lucknow, UP',
        text: 'Information Technology with 7.9CGPA',
    },
    {
        id: 3,
        year: 'July 2016-June 2018',
        title: 'InterMediate',
        subTitle: 'Aditya Birla Intermediate College,Renukoot,UP',
        text: 'Science Stream with 8.0CGPA',
    },
    {
        id: 4,
        year: 'July 2014-June 2016',
        title: 'Higher Seconadary',
        subTitle:
            'Aditya Birla Intermediate College,Renukoot,UP',
        text: 'Science Stream with 7.5CGPA ',
    },
]
const Resume = () => {
    return (
        <ResumeStyle>
            <Title title="Resume" span="Resume" />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle
                        icon={<BusinessCenter />}
                        title="Working Experince"
                    />
                </div>
                <div className="resume-content">
                    {resumeContents.map((content) => (
                        <ResumeItem key={content.id} {...content} />
                    ))}
                </div>
                <div className="small-title u-margin">
                    <SmallTitle
                        icon={<SchoolIcon />}
                        title="Educational Qualification"
                    />
                </div>
                <div className="resume-content">
                    {educationalContents.map((content) => (
                        <ResumeItem key={content.id} {...content} />
                    ))}
                </div>
            </InnerLayout>
        </ResumeStyle>
    )
}

const ResumeStyle = styled.div`
    .small-title {
        padding-bottom: 2rem;
    }
    .u-margin {
        margin-top: 2rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`

export default Resume
