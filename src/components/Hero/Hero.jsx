import React from 'react';
import "./Hero.css";
import CodeIntro from './CodeIntro';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='container'>
                    <div className='hero-top'>
                        <div className='content'>
                            <span>Hello, I'm</span>
                            <h1>
                                <Typewriter
                                    words={['Shivendra Singh', 'Frontend Developer', 'Code Crafter']}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </h1>
                            <p>I build sleek, responsive web experiences with modern technologies like React, TypeScript, and Tailwind. Let's turn ideas into beautiful interfaces!</p>
                            <a href='#' className='btn'>Download resume</a>
                        </div>
                        <div className='thumbnail'>
                            <CodeIntro />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
