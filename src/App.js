import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer  from './components/Footer';

function App() {
  return (
    // https://stackoverflow.com/questions/8841845/prevent-div-from-moving-while-resizing-the-page
    <div id="wrapper">
        <Nav />
        <Header /> 
        <Main />
        <Footer />
    </div>
  );
}

export default App;
