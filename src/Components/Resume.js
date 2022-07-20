import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styled/Layout'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'
const educationalContents = [
    {
        id: 1,
        year: 'Jul 2020-Sept 2023',
        title: 'Bachelor of Engineering ',
        subTitle: 'V.B.S. PURVANCHAL UNIVERSITY JAUNPUR, UP',
        text: 'Information Technology with 7.1CGPA',
    },
    {
        id: 1,
        year: 'Jul 2018-Sept 2020',
        title: 'Diploma in Information technology ',
        subTitle: 'Government Girls Polytechnic Lucknow, UP',
        text: 'Information Technology with 7.9CGPA',
    },
    {
        id: 2,
        year: 'July 2016-June 2018',
        title: 'InterMediate',
        subTitle: 'Aditya Birla Intermediate College,Renukoot,Sonebhadra,',
        text: 'Science Stream',
    },
    {
        id: 3,
        year: 'July 2014-June 2016',
        title: 'Higher Seconadary',
        subTitle:
            'Aditya Birla Intermediate College,Renukoot,Sonebhadra,Uttar-Pradesh,India',
        text: 'Science Stream ',
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
                {/* <div className="resume-content">
                    {resumeContents.map((content) => (
                        <ResumeItem key={content.id} {...content} />
                    ))}
                </div> */}
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
