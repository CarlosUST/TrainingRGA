
import { MOCK_PROJECTS } from './MockProject';
import type { Project } from './Project';
import ProjectsList from './ProjectsList';

function ProjectsPage() {
  const saveProject = (project: Project) => {
    console.log('Saving Project: ', project)
  };
  return (
    <>
      <h1>Projects</h1>
      <ProjectsList onSave={saveProject} projects={MOCK_PROJECTS}/>
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
