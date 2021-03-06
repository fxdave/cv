import React from 'react'
import './Section.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

interface SectionItemProps {
    projectName: React.ReactNode
    at?: React.ReactNode
    link?: string
    linkStyle?: Object
    date: React.ReactNode
    skills?: React.ReactNode
    description: React.ReactNode
    icon?: string
}

export const SectionItem = ({ projectName, at, date, skills, description, link, linkStyle, icon }: SectionItemProps) => <article>
    <h3>
        <span className="project">{projectName}</span>
        {at && <span className="provider"> @ {at} </span>}
    </h3>
    <div className="floating-container">
        <span className="date">{date}</span>
        {link && <a href={link} target="_blank" className="link" style={linkStyle ? linkStyle : {}}>
            <FontAwesomeIcon icon={icon == 'medium' ? faMedium : faGithub} />
        </a>}
    </div>
    <div className="skills">
        {skills && skills.map(skill => <span key={skill + projectName} className="skill">{skill}</span>)}
    </div>
    <div className="description">
        {description}
    </div>
</article>

interface SectionProps {
    title: React.ReactNode
    primary?: boolean,
    flex0?: boolean
    children?: React.ReactNode
}

export const Section = ({ title, children, primary, flex0 }: SectionProps) => <section className={
    'part ' + (primary ? 'primary ' : 'secondary ' ) + (flex0 ? 'flex-0' : '')
    }>
    <h2>{title}</h2>
    <div>
        {children}
    </div>
</section>

interface SectionsProps {
    children?: React.ReactNode
}

export const Sections = ({ children }: SectionsProps) => <div className="sections">
    {children}
</div>

interface PageProps {
    children?: React.ReactNode
}

export const Page = ({ children }: SectionsProps) => <div className="page">
    {children}
</div>