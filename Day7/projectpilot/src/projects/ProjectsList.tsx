import React from 'react'
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectsListProps {
    projects: Project[];
}

/* Parent Component*/
function ProjectsList({projects}: ProjectsListProps) {
  //return <pre>{JSON.stringify(projects, null, ' ')}</pre>
  const handleEdit = (project: Project) => {
    console.log(project)
  }; 
  const items = projects.map(project => (
    <div key={project.id} className='cols-sm'>
      <ProjectCard project={project} onEdit={handleEdit}/>
      <ProjectForm/>
    </div>
  ));
  return <div className='row'>{items}</div>
  
}

/* function ProjectsList({projects}: ProjectsListProps) {
  //return <pre>{JSON.stringify(projects, null, ' ')}</pre>
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
              <h5 className="strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{project.description}</p>
              <p>Budget : {project.budget.toLocaleString()}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );

  
}*/

export default ProjectsList
