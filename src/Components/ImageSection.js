import React from 'react'
import styled from 'styled-components'
import resume from '../Assets/imgs/pic4.jpeg'
import PrimaryButton from './PrimaryButton'
const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className="left_content">
                <img src={resume} alt='' />
                {/* <img src="./assets/img42.jpg" alt="" /> */}
              
            </div>
            <div className="right_content">
                <div className="sub_title">
                    <h4>
                        I am <span>supriya</span>
                    </h4>
                </div>
                <p className="paragraph">
                  I am a student of graduation.. In this field i am a freshar.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>
                            <span>:</span>Supriya Maurya
                        </p>
                        <p>
                            <span>:</span>22
                        </p>
                        <p>
                            <span>:</span>Indian
                        </p>
                        <p>
                            <span>:</span>English , Hindi
                        </p>
                        <p>
                            <span>:</span>Mirzapur UP ,India
                        </p>
                        <p>
                            <span>:</span>Student
                        </p>
                    </div>
                </div>
                <PrimaryButton
                    title="Download Resume"
                    target="_blank"
                    href="https://drive.google.com/file/d/1RtifhJh8wURKlguBvVi2Z70GdsulXmD9/view?usp=sharing"
                />
            </div>
        </ImageSectionStyled>
    )
}
const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left_content {
        position: relative;
        .posiIcon {
            position: absolute;
            width: 49%;
            border-radius: 63%;
            left: 10%;
            top: -10%;
        }
        width: 100%;
        img {
            width: 90%;
        }
    }
    .right_content {
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 0.4rem 0;
            font-size: 1rem;
            color: var(--secondary-color);
        }
        .about-info {
            display: flex;
            font-size: 0.9rem;
            .info-title {
                width: 45%;
                /* padding-right: 3rem !important; */
                p {
                    font-weight: 900;
                }
            }
            .info-title,
            .info {
                span {
                    color: var(--secondary-color);
                    margin-right: 0.1rem;
                }
                padding: 0.3rem 0;
            }
        }
    }
    @media screen and (max-width: 955px) {
        flex-direction: column;
        .left_content {
            width: 100%;
            margin-bottom: 1.7rem;

            img {
                width: 70%;
            }
        }
    }
`
export default ImageSection
