import React from 'react'
import { MainLayout, InnerLayout } from '../Styled/Layout'
import Title from './Title'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
const allSkills = [
    {
        title: 'Next js',
        width: '60%',
        text: '60%',
    },
    {
        title: 'React',
        width: '60%',
        text: '60%',
    },
    {
        title: 'JavaScript',
        width: '70%',
        text: '70%',
    },
    {
        title: 'TypeScript',
        width: '50%',
        text: '50%',
    },
 
    {
        title: 'Redux Toolkit',
        width: '30%',
        text: '30%',
    },

    {
        title: 'Landing Page optimization',
        width: '50%',
        text: '50%',
    },
    {
        title: 'Search engines optimization [SEO]',
        width: '50%',
        text: '50%',
    },
    {
        title: 'TailwindCss',
        width: '70%',
        text: '70%',
    },
    {
        title: 'Material-UI',
        width: '60%',
        text: '60%',
    },
    {
        title: 'GitHub',
        width: '70%',
        text: '70%',
    },
    {
        title: 'Shadcn UI',
        width: '50%',
        text: '50%',
    },
    {
        title: 'UI Design',
        width: '80%',
        text: '80%',
    },
    {
        title: 'AWS',
        width: '30%',
        text: '20%',
    },
    {
        title: 'MongoDB',
        width: '20%',
        text: '20%',
    },

]
const Skills = () => {
    return (
        <SkillsStyle>
            <Title title="Resume" span="Resume" />
            <InnerLayout>
                <div className="skills">
                    {allSkills.map((skill, i) => {
                        return (
                            <ProgressBar
                                key={skill.title}
                                title={skill.title}
                                text={skill.text}
                                width={skill.width}
                            />
                        )
                    })}
                </div>
            </InnerLayout>
        </SkillsStyle>
    )
}

const SkillsStyle = styled.div`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1.5rem;
        grid-column-gap: 2.5rem;
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default Skills
