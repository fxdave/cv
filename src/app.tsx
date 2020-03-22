import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss'
import { InRange, In, Since, On } from './components/Date'
import { Section, SectionItem, Sections } from './components/Section'
import Me from './components/Me'
import Contact from './components/Contact'
import { SkillCategories, SkillCategory, Skill } from './components/Skills'

const App = () => <div className="content">
    <Me />
    <Sections>
        <Section title="Experiences / Jobs">
            <SectionItem
                projectName="HVG 360°"
                at="Stylers Kft."
                date={<InRange from={new Date('2020-01-13')} />}
                skills={[
                    'Docker',
                    'SH',
                    'NodeJS',
                    'Typescript',
                    'React',
                    'SCSS',
                    'Python',
                    'Django',
                    'Saleor',
                    'GraphQL',
                    'Apollo',
                    'Gitlab CI',
                    'Swagger',
                    'Mocha',
                    'PostgreSQL',
                    'MongoDB',
                ]}
                description={<p>
                    It's a work in an outstanding team at Stylers.
                    We bring a modern microservice architectured system for the HVG's new online magazine.
                    I've already worked on almost every microservice.
            </p>}
            />
            <SectionItem
                projectName="Scheduler for Bayer"
                at="Stylers Kft."
                date={<InRange from={new Date('2019-12-02')} to={new Date('2020-01-10')} />}
                skills={['React', 'Typescript']}
                description={<p>
                    One other developer and I internationalized the whole application while making some refactorings.
            </p>}
            />
            <SectionItem
                projectName="Cleansheet for McKinsey"
                at="Stylers Kft."
                date={<InRange from={new Date('2019-10-07')} to={new Date('2019-11-29')} />}
                skills={['NodeJS', 'Mocha', 'React', 'Typescript', 'MySQL']}
                description={<p>
                    One other developer and I joined a team to develop some new features to an existing project.
            </p>}
            />
            <SectionItem
                projectName="OTS"
                at="Stylers Kft."
                date={<InRange from={new Date('2019-03-25')} to={new Date('2020-09-06')} />}
                skills={['Python', 'Angular', 'Typescript', 'PostgreSQL']}
                description={<p>
                    I was responsible for the discount calculation.
                    I had to be on top of mathematics, especially in operation research and Graph theory, which I enjoyed a lot.
            </p>}
            />
            <SectionItem
                projectName="Ecommerce for bikes"
                date={<InRange from={new Date('2019-04-01')} to={new Date('2020-08-16')} />}
                skills={['PHP', 'Wordpress', 'Woocommerce', 'MySQL', 'SCSS', 'JS']}
                description={<p>
                    I had to make an eCommerce for a man, but his requirements didn't fit well into Woocommerce/Wordpress.
                    After 3 months, the site was so buggy because of the workarounds I had to make.
                    I realized It would never be good enough, so I abandoned the project.
                    It was an excellent lesson for me that changed the way I think.
                    I started evaluating rapid prototyping, requirement planning, and other project sub-tasks that might help to avoid this failure.
                    By the way, I made "Argep.hu", "Aurkereso.hu" integeration, <code>CSV</code> file importer, shipping cost calculator, etc...
            </p>}
            />
            <SectionItem
                projectName="Plugin development for Wordpress"
                date={<In month={new Date('2018-08')} />}
                skills={['PHP', 'Wordpress', 'Woocommerce', 'JS', 'MySQL']}
                description={<p>
                    I had to make an emailing plugin for newsletters.
                    I extended it with an invitation module that allows you to send a regular customer registration link.
            </p>}
            />
            <SectionItem
                projectName="KIOSK"
                at="Continental"
                date={<InRange from={new Date('2018-06-01')} to={new Date('2018-08-28')} />}
                skills={['PHP', 'VueJS', 'MySQL', 'Laravel', 'SCSS', 'JS']}
                description={<p>
                    For the first time, I was developing a new kiosk system from scratch.
                    There was an old, weakly-designed kiosk system there, so I renewed it by creating a new application in the Laravel framework and its documentation.
                    Later, I got some developers for the same project. I had to review and help their work.
            </p>}
            />
            <SectionItem
                projectName="ERP"
                at="RIGO Kft."
                date={<InRange from={new Date('2016-06-01')} to={new Date('2016-07-28')} />}
                skills={['PHP', 'JQuery', 'MySQL', 'JS']}
                description={<p>
                    I had to create an Enterprise Resource Planning software for a company that assembles a different kind of machines.
                    The ERP system had to manage every single part of a machine.
                    Logistics, warehouse management, work shift control, car status register, reports, emailing, to name a few.
                    I wasn't alone, but I made the fundamentals and most of the features.
            </p>}
            />
            <SectionItem
                projectName="Silkroad server website"
                date={<InRange from={new Date('2016-06-01')} to={new Date('2017-01-10')} />}
                skills={['PHP', 'JQuery', 'MySQL', 'JS']}
                description={<p>
                    I had to build a CMS (Content management system) for a game server. I used PayPal API here.
            </p>}
            />
            <SectionItem
                projectName="Music-Team"
                date={<InRange from={new Date('2014-06-01')} to={new Date('2017-07-28')} />}
                skills={['PHP', 'VueJS', 'MySQL', 'SCSS']}
                description={<p>
                    In this project, I had to make a site where people can listen to/download music.
                    The owner of this project loves music, and he also loved new features.
                    I created my own <code>PHP</code> backend framework.
            </p>}
            />
        </Section>
        <Section title="Experiences / My Projects">
            <SectionItem
                projectName="Vonal"
                link="https://github.com/vonal-project"
                linkStyle={{
                    animationDuration: "1s"
                }}
                date={<Since date={new Date('2019-03-01')} />}
                skills={['NodeJS', 'Typescript', 'Rust', 'Neon bindings', 'React', 'Electron']}
                description={<p>
                    It is a hobby project. I wanted to make a good launcher for tiling window managers for Linux.
                    I implemented fuzzy search with <code>Rust</code> and used <code>FFI</code> to call it from a react frontend.
                    This way, I improved its performance hugely.
                    Currently, I am rewritting this clearly with <code>Rust</code>.
            </p>}
            />
            <SectionItem
                projectName="VecJS"
                link="https://github.com/fxdave/vecjs"
                linkStyle={{
                    animationDuration: "2s"
                }}
                date={<Since date={new Date('2019-02-01')} />}
                skills={['JS']}
                description={<p>
                    Vecjs is functional, immutable, feature-rich vector library, which provides infix operations as we used to use in math class.
                    I think it still the best 2D vector library.
                    I am going to make support for 3 and more dimensional vectors too.
                    I plan to make a complete coordinate geometry library, which is also lightweight.
            </p>}
            />
            <SectionItem
                projectName="ReactKonvaAnchors"
                link="https://github.com/fxdave/react-konva-anchors"
                linkStyle={{
                    animationDuration: "5s"
                }}
                date={<Since date={new Date('2019-02-01')} />}
                skills={['JS', 'React']}
                description={<p>
                    Konva is a canvas drawing library, and <code>react-konva</code> is a react library for using Konva inside the react context.
                    My library provides "anchors" for <code>react-konva</code>, which is a CSS like positioning and sizing utility for Konva objects like rectangle, text.
                    With this library, you can make HTML like behavior to convey objects (e.g., automatic width).
            </p>}
            />
            <SectionItem
                projectName="FastEJS"
                link="https://github.com/fxdave/fastejs"
                linkStyle={{
                    animationDuration: "5s"
                }}
                date={<Since date={new Date('2019-01')} />}
                skills={['JS']}
                description={<p>
                    The <code>EJS</code> is a well-known template engine for <code>NodeJS</code>.
                    There were some issues with the original parser, and their code was also overly complicated, so instead of fixing it, I created another package for myself.
                    It is about half the execution time of the original, but also more modular, and easier to maintain.
            </p>}
            />
            <SectionItem
                projectName="ERScaffold"
                link="https://github.com/fxdave/react-konva-anchors"
                linkStyle={{
                    animationDuration: "2s"
                }}
                date={<Since date={new Date('2018-09-01')} />}
                skills={['NodeJS', 'React', 'Electron', 'Elixir', 'Phoenix', 'Docker']}
                description={<p>
                    I considered the Entity-Relationship model to be suitable for high-level abstractions,
                    that I could use it to generate pre-configured websites that satisfy the given abstractions.
            </p>}
            />
        </Section>
        <Section title="Articles">
            <SectionItem
                projectName="Beginners’ Linux Guide Part 1"
                link="https://medium.com/@dbiro97/beginners-linux-guide-part-1-87ac0f0b9d1f"
                linkStyle={{
                    animationDuration: "5s"
                }}
                icon="medium"
                date={<On date={new Date('2020-01-30')} />}
                skills={['NodeJS', 'Typescript', 'Rust', 'Neon bindings', 'React', 'Electron']}
                description={<p>
                    As a developer, I found Linux more usable and efficient in my workflow.
                    It took some time to get used to it tho, but I want to help shorten this path for newbies.
                    So I wrote this article.
                </p>}
            />
            <SectionItem
                projectName="Understanding Linux Graphical Stack by Creating a Window"
                link="https://medium.com/@dbiro97/understanding-linux-graphical-stack-by-creating-a-window-7f82182ee19"
                linkStyle={{
                    animationDuration: "5s"
                }}
                icon="medium"
                date={<On date={new Date('2020-08-01')} />}
                skills={['JS']}
                description={<p>
                    Describes the Linux's graphical stack, from the GPU to writing a windowed application in Rust.
                </p>}
            />
        </Section>
        <Section title="Skills">
            <SkillCategories>
                <SkillCategory title="Programming languages:">
                    <Skill level={10 / 10} title="JS" />
                    <Skill level={10 / 10} title="PHP" />
                    <Skill level={10 / 10} title="TS" />
                    <Skill level={8 / 10} title="Python" />
                    <Skill level={8 / 10} title="Rust" />
                    <Skill level={8 / 10} title="SQL" />
                    <Skill level={8 / 10} title="Bash" />
                    <Skill level={7 / 10} title="Elixir" />
                    <Skill level={7 / 10} title="Java" />
                    <Skill level={6 / 10} title="C++" />
                    <Skill level={5 / 10} title="C" />
                </SkillCategory>
                <SkillCategory title="Markup Languages:">
                    <Skill level={10 / 10} title="HTML" />
                    <Skill level={10 / 10} title="CSS, SCSS" />
                    <Skill level={10 / 10} title="JSON, YML, TOML" />
                </SkillCategory>
                <SkillCategory title="Technolgies:">
                    <Skill level={10 / 10} title="React" />
                    <Skill level={9 / 10} title="VueJS" />
                    
                    <Skill level={9 / 10} title="Mocha" />
                    <Skill level={9 / 10} title="Jest" />

                    <Skill level={10 / 10} title="NodeJS" />
                    <Skill level={5 / 10} title="GraphQL" />
                    <Skill level={5 / 10} title="Apollo" />

                    <Skill level={7 / 10} title="Laravel" />
                    <Skill level={6 / 10} title="Django" />
                    <Skill level={5 / 10} title="Saleor" />
                    <Skill level={7 / 10} title="Phoenix" />
                    <Skill level={4 / 10} title="Neon bindings (Rust FFI)" />

                    <Skill level={5 / 10} title="Wordpress" />
                    <Skill level={6 / 10} title="Woocommerce" />

                    <Skill level={8 / 10} title="PostgreSQL" />
                    <Skill level={5 / 10} title="MongoDB" />
                    <Skill level={10 / 10} title="MySQL" />

                    <Skill level={8 / 10} title="Bootstrap" />
                    <Skill level={3 / 10} title="JQuery" />
                </SkillCategory>
                <SkillCategory title="DevOps:">
                    <Skill level={5 / 10} title="Gitlab CI" />
                    <Skill level={8 / 10} title="GNU" />
                    <Skill level={8 / 10} title="Linux" />
                    <Skill level={8 / 10} title="Docker, docker-compose" />
                </SkillCategory>
                <SkillCategory title="Others:">
                    <Skill level={10 / 10} title="Objectum Oriented Programming (OOP)" />
                    <Skill level={10 / 10} title="Functional Programming (FP)" />
                    <Skill level={10 / 10} title="Design patterns (SOLID, DRY, and much more)" />
                    <Skill level={3 / 10} title="Data science" />
                </SkillCategory>
                <SkillCategory title="Software knowledge (in terms of a web developer position):">
                    <Skill level={8 / 10} title="Adobe Photoshop" />
                    <Skill level={7 / 10} title="Adobe Illustrator" />
                    <Skill level={6 / 10} title="Gimp" />
                    <Skill level={6 / 10} title="Inkscape" />
                    <Skill level={6 / 10} title="Gravit designer" />
                </SkillCategory>
            </SkillCategories>
        </Section>
        <Section title="Contact">
            <Contact
                email="dbiro97@gmail.com"
                phone="+36 70 271 9320"
            />
        </Section>
    </Sections>
</div>

ReactDOM.render(<App />, document.getElementById('root'))