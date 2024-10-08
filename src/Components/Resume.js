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
        title: 'Nike-store',
        subTitle: 'ReactJs, Redux, TailwindCss, ReactHooks, ',
        text: [
            'I embarked on an exhilarating journey to recreate the Nike store using React.js, Redux, and a suite of cutting-edge tools. By leveraging React for the frontend and Redux for state management, I ensured a seamless user experience with robust data handling capabilities.',
            ' React ,Redux with Immer js, React hooks,Material UI ,JWT and React router dom etc are the main library that I have used for making product appearance, components logic.',
            'Incorporating Tailwind CSS streamlined the styling process, optimizing both best practices and time management.',
            'Furthermore, I enhanced the projects functionality with features like a Tailwind-powered slider, lodash utilities for efficient data manipulation, and React Hot Toast for intuitive notifications. This comprehensive approach not only elevated the user experience but also showcased my commitment to utilizing the latest technologies',
            'My dedication to code quality, coupled with meticulous folder structure management, facilitated easy maintenance and scalability. Moreover, adherence to SEO best practices and performance optimization strategies resulted in impressive LightHouse scores, ensuring maximum visibility and accessibility',
        ],
    },

    {
        id: 2,
        title: 'Google Search Engine Clone ',
        subTitle: 'NextJs, Typescript, ReactJs, and TailwindCss',
        text: [
            'I leveraged the power of Next.js and React.js to craft a Google-like search engine, incorporating voice search functionality for an immersive user experience',
            ' By integrating voice search capabilities, I not only enhanced accessibility but also embraced emerging trends in user interface design',
            'With a focus on code quality, reusable components, and meticulous folder structure.',
            'TypeScript ensured seamless data type handling, eliminating compilation errors, and the implementation of TypeScript, I fortified my codebase with static typing, preemptively catching errors and fostering a more resilient application architecture.',
            'Furthermore, adhering to SEO best practices and optimizing for performance, I orchestrated a harmonious blend of functionality and efficiency.',
            ' Leveraging Tailwind CSS, I streamlined the styling process, accelerating development cycles without compromising design integrity',
        
        ],
    },
    {
        id: 3,
        title: 'Codepen Clone',
        subTitle: 'ReactJs,ReactHooks and React Code-mirror',
        text: [
            'Coding enthusiasts and developers alike will find my CodePen clone project to be a captivating exploration of React.js capabilities',
            'Through meticulous attention to detail in component design and code organization, I have established a foundation that promotes code reusability and scalability.',
            'Incorporating React CodeMirror into the mix has elevated the user experience by providing a feature-rich code editor environment. With support for multiple language modes, users can effortlessly switch between HTML, CSS, and JavaScript, unleashing their creativity without constraints',
            'Moreover, the flexibility to customize themes or create bespoke ones caters to individual preferences, fostering a personalized coding environment. This attention to detail extends beyond functionality to encompass aesthetics, ensuring that users feel empowered and inspired as they engage with the platform',
            
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

const experinceContents = [
    {
        id: 1,
        title: 'Software Developer Intern ',
        subTitle:
            'NextJs, Typescript, ReactJs, TailwindCss, Aws, MongoDB, Clerk authentication',
        name:"Touch Technologies pvt, Bangalore, KA  (September 2024 - present)",    
        text: [
       
            'Technical Skills: Frontend Development: Proficient in Next.js and TypeScript, I build scalable and high-performance applications with a user-centric design',
            'Styling: Skilled in Tailwind CSS, I craft visually appealing interfaces that enhance user experience.',
            'State Management: Experienced with Redux Toolkit for efficient state management, ensuring seamless application performance.',
            'Backend Technologies: Gaining expertise in AWS and MongoDB, I am currently learning to manage data and storage solutions effectively, particularly through AWS S3 buckets.',
            'Authentication: Familiar with Clerk for secure and user-friendly authentication solutions in web applications.',
        ],
    },
]
const Resume = () => {
    return (
        <ResumeStyle>
            <Title title="Work" span="Resume" />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={<BusinessCenter />} title="Experience" />
                </div>
                <div className="resume-content">
                    {experinceContents.map((content) => (
                        <ResumeItem key={content.id} {...content} />
                    ))}
                </div>
            </InnerLayout>
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
