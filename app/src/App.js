import './App.css';
import Homepage from './Home.js';
import Education from './Education.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import Outside from './Outside.js'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

const App = function() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/education" element={<Education/>}></Route>
              <Route path="/experience" element={<Experience/>}></Route>
              <Route path="/projects" element={<Projects/>}></Route>
              <Route path="/outside" element={<Outside/>}></Route>
              <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
