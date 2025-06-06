import React, { useState, type SyntheticEvent } from 'react'
import { Project } from './Project';


/*Child component */
interface ProjectFormProps {
  project: Project; 
  onSave: (project: Project) => void;
  onCancel: ()=> void;}

function ProjectForm({
  project: initialProject,
  onSave,
  onCancel,
}: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);
   const [errors, setErrors] = useState({
   name: '',
   description: '',
   budget: '',
 });
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    //onSave(new Project({ name: 'Updated Project' }));
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === 'checkbox' ? checked : value;

    //if input type is number convert the updatedValue string to a +number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited +like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

      function validate(project: Project) {
  let errors: any = { name: '', description: '', budget: '' };

  if (project.name.trim().length === 0) {
    errors.name = 'Name is required.';
  } else if (project.name.trim().length < 3) {
    errors.name = 'Name needs to be at least 3 characters.';
  }
  if (project.name.trim().length > 100) {
    errors.name = 'Name can not be longer than 100 characters';
  }

  if (project.description.trim().length === 0) {
    errors.description = 'Description is required.';
  } else if (project.description.trim().length > 2000){
    errors.description = 'Description can not be longer than 2000 characters';
  }

  if (project.budget <= 0 || isNaN(project.budget)) {
    errors.budget = 'Budget must be more than $0.';
  }

  return errors;
}

  function isValid() {
    const validationErrors = validate(project);
  setErrors(validationErrors);
    return (
      validationErrors.name.length === 0 &&
    validationErrors.description.length === 0 &&
    validationErrors.budget.length === 0
    );
  }

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
       value={project.name}
       onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
       value={project.description}
       onChange={handleChange}
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
       value={project.budget}
       onChange={handleChange}
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}
      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
       checked={project.isActive}
       onChange={handleChange}
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
