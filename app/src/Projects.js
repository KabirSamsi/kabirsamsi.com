import Navbar from './Navbar.js';
import './App.css';

const Projects = function() {
  return (
    <div className="App main-display">
      <Navbar current="projects"/>
      <header className="App-header">
        <ul>
          <li><a target="_none" href="https://github.com/KabirSamsi/Franz">Franz</a> – A Language for Text-Based Music Notation</li>
          <li><a target="_none" href="https://github.com/KabirSamsi/KLaTsL">KLaTsL</a> – A Type System for Linear Algebra</li>
          <li><a target="_none" href="https://github.com/KabirSamsi/find-your-bird">FindYourBird</a> – A Birding Tool for Amateur Ornithologists</li>
          <li><a target="_none" href="https://github.com/Saberchat/saberchat">Saberchat</a> – A Community Platform Infrastructure</li>
        </ul>
      </header>
    </div>
  );
}

export default Projects;