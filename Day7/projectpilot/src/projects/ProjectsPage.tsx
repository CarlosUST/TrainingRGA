
import { MOCK_PROJECTS } from './MockProject';
import ProjectsList from './ProjectsList';

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectsList projects={MOCK_PROJECTS}/>
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
