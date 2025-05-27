import React, { useState } from 'react'
import { Project } from '../projects/Project';
import ProjectForm from '../projects/ProjectForm';
import { projectAPI } from '../projects/projectAPI';

function NewProject() {

  const initialProject = new Project({
    id: 0,
    name: '',
    description: '',
    budget: 0,
    isActive: false,
  });

  const handleSave = async (project: Project) => {
    try {
      const savedProject = await projectAPI.post(project);
      console.log('Project Saved: ', savedProject);
    }catch (error){
      console.error('Error Saving project: ', error)
    }
    
  };

  const handleCancel = () => {
    console.log('Project canceled');
  };

  

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
