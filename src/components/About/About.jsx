import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className='container'>
            <div className='about'>
                <h2 className='heading'>About me</h2>
                <p>
                    Hi! I'm a Frontend Developer with over 5.7 years of experience building high-performance, user-focused web applications — primarily in the e-commerce space. I specialize in modern JavaScript frameworks like React, and I'm skilled in Redux, TypeScript, and Next.js for building scalable, maintainable frontends.
                </p>
                <p>
                    I’ve also worked with Adobe Experience Manager (AEM) to develop component-driven architectures for content-rich websites. My approach blends clean UI/UX design with efficient, modular code, ensuring smooth customer experiences and high conversion rates.
                </p>
                <p>
                    I'm passionate about continuous learning, optimizing performance, and staying current with frontend trends and technologies. Whether it’s creating reusable components, improving Core Web Vitals, or integrating APIs seamlessly — I love bringing ideas to life in the browser.
                </p>
                <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>Redux toolkit</li>
                    <li>Next.js</li>
                    <li>AEM</li>
                    <li>Firebase</li>
                </ul>
                <p>
                    I'm currently sharpening my skills in the following areas to broaden my development capabilities:
                </p>
                <ul className="skills-list">
                    <li>Java</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>DSA with C++</li>
                </ul>
            </div>
        </div>
    )
}

export default About
