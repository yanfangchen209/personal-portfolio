import logo from './logo.svg';
import './styles/App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu"
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='/personal-portfolio'>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDetail/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>

    </div>

 
 
  );
}

export default App;
