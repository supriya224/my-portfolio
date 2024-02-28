import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styled/Layout'
import Title from './Title'
import FieldItem from './FieldItem'
import PrimaryButton from './PrimaryButton'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ContactItems from './ContactItems'

const ContactSection = () => {
   
    const ContactDetials = [
        {
            icon: <PhoneIcon />,
            title: 'Phone Number',
            contact1: '8081149224',
        },
        {
            icon: <EmailIcon />,
            title: 'Email Address',
            contact1: 'supriyam224@gmail.com',
            contact2: 'suprimaurya2632@gmail.com ',
        },
        {
            icon: <LocationOnIcon />,
            title: 'Address',
            contact1: 'Bangalore ,Karnataka,India',
            contact2: ' 560068',
        },
    ]
    return (
        <MainLayout>
            <Title title="Contact" span="Contact" />
            <ContactSectionStyle>
                <InnerLayout>
                    <div className="contact-section">
                        <div className="left-content">
                            <div className="contact-title">
                                <h4>Get in touch</h4>
                            </div>
                            <form className="form">
                                <div className="form-field">
                                    <label htmlFor="name" id="name">
                                        Enter your Name*
                                    </label>
                                    <input type="text" id="name " />
                                </div>
                                <FieldItem
                                    name="email"
                                    id="email"
                                    label="Enter the Email*"
                                />

                                <FieldItem
                                    name="subject"
                                    id="suject"
                                    label="Enter the Subject*"
                                />
                                <div className="form-field">
                                    <label htmlFor="textarea" id="name">
                                        Enter your Message*
                                    </label>
                                    <textarea
                                        name="textarea"
                                        id="name "
                                        col="30"
                                        rows="8"
                                    />
                                </div>
                               
                                <div className="form-field form-button">
                                    <PrimaryButton title="Send Email" />
                                </div>
                            </form>
                        </div>
                        <div className="right-action">
                            {ContactDetials.map((cItem, i) => (
                                <ContactItems key={i} {...cItem} />
                            ))}
                        </div>
                    </div>
                </InnerLayout>
            </ContactSectionStyle>
        </MainLayout>
    )
}

const ContactSectionStyle = styled.section`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1.5rem;
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(1, 1fr);
            .left-content {
                margin-bottom: 4rem;
            }
        }
        .right-action {
            display: flex;
            flex-direction: column;
        }
        .contact-title {
            h4 {
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.7rem;
            }
        }
        .form {
            width: 100%;
            .form-field {
                margin-top: 0.2rem;
                position: relative;
                width: inherit;
                margin-top: 1.5rem;
                label {
                    position: absolute;
                    top: -15px;
                    left: 20px;
                    background-color: var(--background-dark-color);
                    padding: 0 0.3rem;
                    color: inherit;
                    @media screen and (max-width: 755px) {
                        top: -10px;
                    }
                    @media screen and (max-width: 600px) {
                        top: -6px;
                    }
                }
                input {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background-color: transparent;
                    height: 40px;
                    padding: 0 15px;
                    width: inherit;
                    color: inherit;
                }
                textarea {
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: 0.6rem 1rem;
                    @media screen and (max-width: 380px) {
                        width: 95%;
                    }
                }
            }
            .form-button {
                width: 100%;
            }
            
            @media screen and (max-width: 380px) {
                width: 95%;
                .form-button {
                    width: 90%;
                }
            }
        }
    }
`
export default ContactSection
