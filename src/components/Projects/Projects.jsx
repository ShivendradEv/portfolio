import React, { useEffect, useState } from 'react';
import "./Project.css";

const data = [
    {
        title: "Todo app",
        image: "/portfolio/todo.png",
        linkTitle: "Visit site",
        linkIcon: "/portfolio/chevron-forward-outline.png",
        linkUrl: "https://github.com/ShivendradEv/todo-app"
    },
    {
        title: "Movie search",
        image: "/portfolio/search.png",
        linkTitle: "Visit site",
        linkIcon: "/portfolio/chevron-forward-outline.png",
        linkUrl: "https://github.com/ShivendradEv/movie-search"
    },
    {
        title: "Gaming landing page",
        image: "/portfolio/theme.jpg",
        linkTitle: "Visit site",
        linkIcon: "/portfolio/chevron-forward-outline.png",
        linkUrl: "https://github.com/ShivendradEv/theme"
    }
]

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        setProjects(data);
    }, [])

    return (
        <div className='container' id='projects'>
            <div className='projects'>
                <h2 className='heading'>Personal Projects</h2>
                <div className='project-grid'>
                    {projects?.map((item, index) => (
                        <div className='project-card' key={index}>
                            <div className='thumbnail'>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className='content'>
                                <h3>{item.title}</h3>
                                <a href={item.linkUrl} target='_blank'>{item.linkTitle} <img src={item.linkIcon} alt='chevron forward' /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
