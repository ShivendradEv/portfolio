import React, { useEffect, useState } from 'react';
import "./Project.css";

const data = [
    {
        title: "O2 mobile shop",
        image: "o2.png",
        linkTitle: "Visit site",
        linkIcon: "chevron-forward-outline.png",
        linkUrl: "https://businessshop.o2.co.uk/store/o2-business.html"
    },
    {
        title: "PGE",
        image: "pge.png",
        linkTitle: "Visit site",
        linkIcon: "chevron-forward-outline.png",
        linkUrl: "https://pge.com/"
    },
    {
        title: "Toyota spare parts",
        image: "toyota.png",
        linkTitle: "Visit site",
        linkIcon: "chevron-forward-outline.png",
        linkUrl: "https://autoparts.toyota.com/"
    }
]

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        setProjects(data);
    }, [])

    return (
        <div className='container'>
            <div className='projects'>
                <h2 className='heading'>Recent projects</h2>
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
