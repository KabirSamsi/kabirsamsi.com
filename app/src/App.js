import './App.css';


function Navbar() {
  return (
    <div className="navbar-heading">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">About Me <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Research</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Outside Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="blank" href="resume.pdf">Resume</a>
            </li>
            <li className="nav-item logo" id="first-logo">
              <a className="nav-link" target="_blank" href="https://github.com/KabirSamsi">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li className="nav-item logo">
              <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/kabir-samsi/">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="nav-item logo">
              <a className="nav-link" target="_blank" href="mailto:samsikabir@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
            <li className="nav-item logo">
              <a className="nav-link" target="_blank" href="https://www.instagram.com/ksamsi04/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

function Photo() {
  return (
    <div>
    
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img className="profile-photo" src="kabir.jpeg"></img>
          </div>
          <div className="flip-box-back">
            <img className="profile-photo" src="kingfisher_profile.jpeg"></img>
          </div>
        </div>
      </div>

      <h3 className="intro-text">Hi there, I'm Kabir.</h3>
      <em className="subtext">Thanks for stopping by!</em>
    </div>
  );
}

const App = function() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Photo/>
      </header>
    </div>
  );
}

export default App;
