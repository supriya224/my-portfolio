import React, { useEffect } from 'react'
import ContactSection from '../Components/ContactSection'

const ContactPage = ({ setTitle }) => {
    useEffect(() => setTitle('Contact'), [])

    return (
        <div>
            <ContactSection />
        </div>
    )
}

export default ContactPage
