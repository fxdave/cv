import React from 'react'
import './Skills.scss'
interface SkillCategoriesProps {
    children?: React.ReactNode
}

export const SkillCategories = ({ children }: SkillCategoriesProps) => <div className="skill-categories">
    {children}
</div>

interface SkillCategoryProps {
    title: React.ReactNode
    children?: React.ReactNode
}

export const SkillCategory = ({ children, title }: SkillCategoryProps) => <div className="category">
    <h3>{title}</h3>
    <div className="skills">
        {children}
    </div>
</div>

interface SkillProps {
    level: number
    title: React.ReactNode
}

export const Skill = ({ title, level }: SkillProps) => {
    return <div 
        className="skill" 
        style={{
            backgroundImage: `linear-gradient(90deg, hsl(${100+level*(255-100-50)}, 30%, 69%) ${ Math.floor(level*100) }%, transparent ${ Math.floor(level*100) }%)`
        }}>
        {title}
    </div>
}