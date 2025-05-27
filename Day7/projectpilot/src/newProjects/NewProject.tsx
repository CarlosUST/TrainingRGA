import React from 'react'
import { Project } from '../projects/Project';
import ProjectForm from '../projects/ProjectForm';

function NewProject() {
  const handleSave = (project: Project) => {
    console.log('Project Saved: ', project);
  };

  const handleCancel = () => {
    console.log('Projection canceled');
  };

  const initialProject = new Project({
    id: 0,
    name: '',
    description: '',
    budget: 0,
    isActive: false,
  });

  return (
    <div>
      <h2>New Project</h2>
    <   ProjectForm
          project={initialProject}
          onSave={handleSave}
          onCancel={handleCancel}  
    />
    </div>
  );
}

export default NewProject
