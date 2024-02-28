import React from 'react'
import styled from 'styled-components'

const ContactItems = ({ icon, title, contact1, contact2 }) => {
    return (
        <ContactItemStyle>
            <div className="left-content">
                <p>{icon}</p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyle>
    )
}
const ContactItemStyle = styled.div`
    padding: 1.3rem 1.8rem;

    background-color: var(--background-dark-gray);
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 1rem;
    }
    .left-content {
        padding: 0.8rem 0.8rem 0.58rem;
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.4rem;
        svg {
            font-size: 2rem;
        }
    }
    .right-content {
        h6 {
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: 0.2rem;
        }
        p {
            padding: 0.1rem 0;
            font-size: 0.8rem;
        }
    }
`

export default ContactItems
