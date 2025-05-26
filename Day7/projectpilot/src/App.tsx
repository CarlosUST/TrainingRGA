import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import HelloClass from "./hello/HelloClass";
import Hello from "./hello/HelloFunction";
import HelloState from "./hello/HelloState";
import ProjectsPage from "./projects/ProjectsPage";
import HomePage from "./home/HomePage";

function App() {
  /*return (
    <>
      <blockquote cite="Benjamin Franklin">
        Tell me and I forget, teach me and I may remember, involve me and I learn.
      </blockquote>
    </>
  );

  return (
    <div className="container">
      <ProjectsPage />
   </div>
  );
  
  const App: React.FC = () => {
    return(
      <div className="App">
        <HelloClass name="Charly" enthusiasmLevel={3}/>
        <HelloState name="Charly">enthusiasmLevel={3}</HelloState>
      </div>
    );
  };

  
  */

  return(
    //<div className="container">
      //<ProjectsPage />
   //</div>
   <BrowserRouter>
   <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/"  className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};




  

  


export default App;