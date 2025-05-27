import React from 'react'
import type { Project } from './Project';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

/*Child component*/
interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (project: Project) => void;
}


function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit, onDelete } = props;

  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
    /*console.log(projectBeingEdited);*/
  };

  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete project "${project.name}"?`)) {
      onDelete(project);
    }
  };

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        <button className="bordered" onClick={() => {handleEditClick(project);

        }}>
          <span className="icon-edit " />
          Edit

        </button>
        <button className='bordered' onClick={handleDeleteClick}>
          <span className="icon-delete" />
          Delete
          </button>
      </section>
    </div>
  );
}
export default ProjectCard
