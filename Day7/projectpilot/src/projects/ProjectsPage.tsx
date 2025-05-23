
import { useState } from 'react';
import { MOCK_PROJECTS } from './MockProject';
import type { Project } from './Project';
import ProjectsList from './ProjectsList';

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

const saveProject = (project: Project) => {
   //console.log('Saving project: ', project);
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
};

return (
   <>
      <h1>Projects</h1>
      
      <ProjectsList onSave={saveProject} projects={projects} />
   </>
);
}

export default ProjectsPage;

/*function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
    </>
  );
}*/
