import HelloClass from "./hello/HelloClass";
import Hello from "./hello/HelloFunction";
import HelloState from "./hello/HelloState";
import ProjectsPage from "./projects/ProjectsPage";

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
    <div className="container">
      <ProjectsPage />
   </div>
  )
};




  

  


export default App;