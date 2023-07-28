import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>

    </div>

 
 
  );
}

export default App;
