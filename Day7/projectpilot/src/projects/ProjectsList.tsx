import React, { useState } from 'react'
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectsListProps {
    projects: Project[];
    onSave: (project: Project) => void;
    onDelete: (project: Project) => void;
}

function ProjectsList({ projects, onSave, onDelete }: ProjectsListProps) {
  const [projectList, setProjectList] = useState<Project[]>(projects);
  const [projectBeingEdited, setProjectBeingEdited] = useState<Project | {}>({});

  React.useEffect(() => {
    setProjectList(projects);
  }, [projects]);

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  const handleDelete = (projectToDelete: Project) => {
    if ((projectBeingEdited as Project).id === projectToDelete.id) {
      cancelEditing();
    }
    onDelete(projectToDelete);
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm
            project={project}
              onSave={onSave}
              onCancel={cancelEditing}
            />
          ) : (
            <ProjectCard project={project} 
                         onEdit={handleEdit} 
                         onDelete={handleDelete}/>
          )}
        </div>
      ))}
    </div>
  );
}

/* Parent Component
function ProjectsList({projects}: ProjectsListProps) {
  //return <pre>{JSON.stringify(projects, null, ' ')}</pre>
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    console.log(project)
    setProjectBeingEdited(project);
  }; 
  const items = projects.map(project => (
    <div key={project.id} className='cols-sm'>

      {project === projectBeingEdited ? (
        <ProjectForm/>
      ) : (
        <ProjectCard project={project} onEdit={handleEdit}/>
      )}
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
