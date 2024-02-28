import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Styled/Layout'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'
const resumeContents = [
    {
        id: 1,
        title: 'Google Search Engine Clone ',
        subTitle: 'NextJs, Typescript, ReactJs, and TailwindCss',
        text: [
            'I leveraged the power of Next.js and React.js to craft a Google-like search engine, incorporating voice search functionality for an immersive user experience',
            ' By integrating voice search capabilities, I not only enhanced accessibility but also embraced emerging trends in user interface design',
            'With a focus on code quality, reusable components, and meticulous folder structure.',
            'TypeScript ensured seamless data type handling, eliminating compilation errors, and the implementation of TypeScript, I fortified my codebase with static typing, preemptively catching errors and fostering a more resilient application architecture.',
            'Furthermore, adhering to SEO best practices and optimizing for performance, I orchestrated a harmonious blend of functionality and efficiency.',
            ' Leveraging Tailwind CSS, I streamlined the styling process, accelerating development cycles without compromising design integrity',
            'Ultimately, my project is a testament to the fusion of cutting-edge technology, meticulous craftsmanship, and a steadfast commitment to delivering unparalleled user experiences in the digital realm.',
            'My project epitomizes excellence in modern web development practices.',
        ],
    },
    {
        id: 2,
        title: 'Codepen Clone',
        subTitle: 'ReactJs,ReactHooks and React Code-mirror',
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
        title: 'Nike-store',
        subTitle: 'ReactJs, Redux, TailwindCss, ReactHooks, ',
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
        title: 'Music-PlayList-App',
        subTitle: 'Typescript, ReactJs, IndexDB and TailwindCss',
        text: [
            'Making hybrid app by using Ionic framework and perform rest api with Asyc await.',
            'Made webPages using Angular8 rxjs and reusable atomic, isolated, optimized components with scalable code.',
            'Deployment knowledge using Heroku and Ec2 with Docker images. Familiear with Jenkins and Nginx.',
        ],
    },
    {
        id: 5,
        title: 'Twitter-Clone',
        subTitle:
            'NextJs, ReactJs,Firebase,ReactHooks, React-Router TailwindCss,',
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
        subTitle: 'Aditya Birla Intermediate College,Renukoot,UP',
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
                        title="Projects Experience"
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
