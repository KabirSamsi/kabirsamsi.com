import './App.css';

function Navbar(props) {
    return (
      <div className="navbar-heading">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              {(props.current === "about")
                ? <li className="nav-item active">
                  <a className="nav-link" href="/">About Me <span className="sr-only">(props)</span></a>
                </li>
              
                : <li className="nav-item">
                  <a className="nav-link" href="/">About Me <span className="sr-only">(props)</span></a>
                </li>                
              }

              {(props.current === "education")
              ? <li className="nav-item active">
                  <a className="nav-link" href="/education">Education</a>
                </li>
              
              : <li className="nav-item">
                  <a className="nav-link" href="/education">Education</a>
                </li>                
              }

              {(props.current === "experience")
              ? <li className="nav-item active">
                  <a className="nav-link" href="/experience">Experience</a>
                </li>
              : <li className="nav-item">
                  <a className="nav-link" href="/experience">Experience</a>
                </li>                
              }

              {(props.current === "projects")
              ? <li className="nav-item active">
                  <a className="nav-link" href="/education">Projects</a>
                </li>
              : <li className="nav-item">
                  <a className="nav-link" href="/projects">Projects</a>
                </li>                
              }

              {(props.current === "outside")
              ? <li className="nav-item active">
                  <a className="nav-link" href="/education">Outside Work</a>
                </li>
              : <li className="nav-item">
                  <a className="nav-link" href="/outside">Outside Work</a>
                </li>                
              }

              <li className="nav-item">
                <a className="nav-link" target="blank" href="resume.pdf">Resume</a>
              </li>
            </ul>
          </div>
            <ul className="navbar-nav">
              <div className="d-flex ms-auto order-5">
                <li className="nav-item logo" id="first-logo">
                  <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/KabirSamsi">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="nav-item logo">
                  <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kabir-samsi/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="nav-item logo">
                  <a className="nav-link" target="_blank" rel="noreferrer" href="mailto:samsikabir@gmail.com">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </div>
            </ul>
        </nav>
      </div>
    )
  }

  export default Navbar;