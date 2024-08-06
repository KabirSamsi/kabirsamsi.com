import Navbar from './Navbar.js';
import './App.css';

function Block() {
  return (
    <div className="block-div">
      <h2 className="block-div-heading">About</h2>
      <p>Hi there! I'm a student researcher at Cornell University studying Computer Science and Mathematics, with a minor in Music and a specialization in Programming Languages & Compiler Abstractions. My interests lie in programming language theory and compilers, applied machine learning, algorithms and combining them all within software engineering.</p>
      <p>I'm currently researching compiler design and PL-hardware abstractions in computer architecture at Cornell, and also work as a software developer, data analyst & teaching assistant. I am skilled in several languages and frameworks, and have several years' experience in research, full-stack development, machine learning & teaching.</p>
    </div>
  )

}

function About() {
  return (
    <div>
      <div className="row text-element">
        <div className="col-lg-6">
            <article className="text-block mode">
              <div className="block-header">
                <h1>Hello World</h1>
              </div>
              <div className="block-content mode">
                  Here's an entry
              </div>
            </article>
        </div>
      </div>
    </div>
  );
}

function Photo() {
  return (
    <div className="photo-div">
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img className="profile-photo" src="kabir.jpeg" alt="Kabir Samsi"></img>
                </div>
                <div className="flip-box-back">
                    <img className="profile-photo" src="kingfisher_profile.jpeg" alt="Kabir Samsi Profile"></img>
                </div>
                <div className="flip-box-back">
                    <img className="profile-photo" src="kingfisher_profile.jpeg" alt="Kabir Samsi Profile"></img>
                </div>
            </div>
        </div>
        <div className="subheading">
            <h3 className="intro-text">Hi there! I'm Kabir.</h3>
            <em className="subtext">I'm a researcher, software engineer & aspiring professor, currently attending Cornell University.</em><br></br>
            <em className="subtext">I'm interested in programming language theory, compilers, algorithms & verifying software.</em><br></br>
            <em className="subtext">I'm also an amateur musican, photographer & ornithologist!</em>
        </div>
    </div>
  );
}

const Homepage = function() {
  return (
    <div className="homepage">
      <Navbar current="about"/>
      <header className="App-header">
        <div className="photo-info">
          <Photo/>
        </div>
      </header>
    </div>
  );
}

export default Homepage;