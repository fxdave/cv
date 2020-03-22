import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'

interface ContactProps {
    email: string,
    phone: string
}

export default ({ email, phone }: ContactProps) => <div className="contact">
    <div className="header"><FontAwesomeIcon icon={faEnvelope}/></div>
    <div className="content"><a href={`mailto:${email}`}>{email}</a></div>
    <div className="header"><FontAwesomeIcon icon={faMobile}/></div>
    <div className="content">{ phone }</div>
</div>