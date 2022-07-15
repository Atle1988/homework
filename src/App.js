import './App.css';
import Nav from "./components/Nav"
import Portfolio from "./components/Portfolio"


function App() {
  return (
    // https://stackoverflow.com/questions/8841845/prevent-div-from-moving-while-resizing-the-page
    <>
      <div>
          <Nav />
          <Portfolio /> 
      </div>
    </>
  );
}

export default App;
