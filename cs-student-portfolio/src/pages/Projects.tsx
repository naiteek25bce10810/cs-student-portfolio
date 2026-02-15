import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;