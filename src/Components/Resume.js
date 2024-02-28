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
            'Coding enthusiasts and developers alike will find my CodePen clone project to be a captivating exploration of React.js capabilities',
            'Through meticulous attention to detail in component design and code organization, I have established a foundation that promotes code reusability and scalability.',
            'Incorporating React CodeMirror into the mix has elevated the user experience by providing a feature-rich code editor environment. With support for multiple language modes, users can effortlessly switch between HTML, CSS, and JavaScript, unleashing their creativity without constraints',
            'Moreover, the flexibility to customize themes or create bespoke ones caters to individual preferences, fostering a personalized coding environment. This attention to detail extends beyond functionality to encompass aesthetics, ensuring that users feel empowered and inspired as they engage with the platform',
            'In essence, my CodePen clone project encapsulates the spirit of innovation and craftsmanship inherent in modern web development. It is a testament to the power of React.js and the ingenuity of its ecosystem, offering users an immersive coding experience that is both intuitive and delightful',
            'Furthermore, my commitment to SEO best practices ensures that the project is not only functional but also discoverable. By optimizing page performance and adhering to SEO guidelines, I have laid the groundwork for broader reach and engagement within the developer community',
        ],
    },
    {
        id: 3,
        title: 'Nike-store',
        subTitle: 'ReactJs, Redux, TailwindCss, ReactHooks, ',
        text: [
            'I embarked on an exhilarating journey to recreate the Nike store using React.js, Redux, and a suite of cutting-edge tools. By leveraging React for the frontend and Redux for state management, I ensured a seamless user experience with robust data handling capabilities.',
            ' React ,Redux with Immer js, React hooks,Material UI ,JWT and React router dom etc are the main library that I have used for making product appearance, components logic.',
            'Incorporating Tailwind CSS streamlined the styling process, optimizing both best practices and time management.',
            'Furthermore, I enhanced the projects functionality with features like a Tailwind-powered slider, lodash utilities for efficient data manipulation, and React Hot Toast for intuitive notifications. This comprehensive approach not only elevated the user experience but also showcased my commitment to utilizing the latest technologies',
            "My dedication to code quality, coupled with meticulous folder structure management, facilitated easy maintenance and scalability. Moreover, adherence to SEO best practices and performance optimization strategies resulted in impressive LightHouse scores, ensuring maximum visibility and accessibility",
            'In essence, my Nike store project epitomizes excellence in modern web development, blending innovation, efficiency, and user-centric design to deliver an unparalleled shopping experience.',
        ],
    },
    {
        id: 4,
        title: 'Music-PlayList-App',
        subTitle: 'Typescript, ReactJs, IndexDB and TailwindCss',
        text: [
            'I embarked on a captivating journey to craft my own music playlist using React.js, a project that seamlessly integrates user-friendly features like audio file export and playlist creation. By leveraging TypeScript for robust data typing and error prevention during compilation, I ensured a smooth and error-free development process',
            'Furthermore, I implemented advanced features such as utilizing IndexDB to store audio files locally, preserving playback progress and position even upon refreshing the page. This attention to detail not only enhances user experience but also demonstrates my commitment to utilizing cutting-edge technologies',
            'In addition to prioritizing code quality and reusable component design, I meticulously structured the folder organization to facilitate easy maintenance and scalability. By adhering to SEO best practices and optimizing page performance, I achieved exceptional LightHouse scores, maximizing visibility and accessibility.',
        'Moreover, the integration of Tailwind CSS optimized styling, promoting best practices and efficient time management. In essence, my music playlist project represents the pinnacle of modern web development, blending innovation, usability, and performance to deliver a seamless and immersive listening experience.',
        ],
    },
    {
        id: 5,
        title: 'Twitter-Clone',
        subTitle:
            'NextJs, ReactJs,Firebase,ReactHooks, React-Router TailwindCss,',
        text: [
            '"I embarked on an exhilarating journey to replicate the essence of Twitter using Next.js, a project that seamlessly integrates features such as post creation with text and emojis, multiple comments, and data storage via Firebase. Leveraging NextAuth for authentication streamlined user access while ensuring data security and integrity',
            'Through meticulous attention to detail, I crafted reusable components and maintained high code quality, complemented by a well-structured folder organization. Embracing SEO best practices and optimizing page performance, I achieved outstanding LightHouse scores, enhancing discoverability and user engagement ',
            'Furthermore, the utilization of Tailwind CSS not only ensured sleek and responsive styling but also facilitated efficient development practices, aligning with best practices and optimizing time management.',
            'In essence, my Twitter clone project embodies the convergence of modern web development technologies, delivering a seamless user experience while showcasing innovation, efficiency, and a commitment to excellence.',
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
            <Title title="Work" span="Resume" />
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
