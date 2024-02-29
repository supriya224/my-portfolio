import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton'
import myImage from '../Assets/imgs/img.jpeg';
const ImageSection = () => {
    console.log("Proc",process.env.PUBLIC_URL);
    return (
        <ImageSectionStyled>
            <div className="left_content">
                <img src={myImage} alt="" loading='lazy' />
            </div>
            <div className="right_content">
                <div className="sub_title">
                    <h4>
                        I am <span>Supriya</span>
                    </h4>
                </div>
                <p className="paragraph">
                    A passionate and professional React and JavaScript
                    developer, eager to embark on a journey of learning and
                    growth as a fresher. Ready to bring creativity, dedication,
                    and a fresh perspective to every project
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Qualification</p>
                      
                    </div>
                    <div className="info">
                        <p>
                            <span>:</span>Supriys Maurya
                        </p>
                        <p>
                            <span>:</span>Indian
                        </p>
                        <p>
                            <span>:</span>English , Hindi
                        </p>
                        <p>
                            <span>:</span>Banglore,KA
                        </p>
                        <p>
                            <span>:</span>B.Tech( IT 2023 )
                        </p>
                    </div>
                </div>
                <PrimaryButton
                    title="Download Resume"
                    target="_blank"
                    href="https://drive.google.com/file/d/1JHSoMVBKIlnqviPi5jCuiAe_UFd25DsX/view?usp=drive_link"
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
