import Navbar from './Navbar.js';
import './App.css';

const Education = function() {
  return (
    <div className="App main-display">
      <Navbar current="education"/>
      <header className="App-header">
        <div id="cornell-wrapper">
          <article className="education-box" id="cornell">
            <h1>Cornell University</h1>
            <p class="subtext-smol"><em>Bachelor in Arts '26 (Computer Science, Mathematics & Music) at the College of Arts & Sciences</em></p>
            <p><strong>Dean's List (All Semesters), Pursuing CS Honors</strong></p>

            <p>I'm currently studying Computer Science & Mathematics, with a minor (which may change to a major) in Music. I'm advised by <a rel="noreferrer" target="_blank" href="https://www.cs.cornell.edu/~damle/">Anil Damle</a> & <a rel="noreferrer" target="_blank" href="https://math.cornell.edu/dan-m-barbasch">Dan Barbasch</a>. I'm pursuing a specialization in Programming Languages & Compilers, considering an added specialization in either SWE or ML.</p>
            <p>I am involved in a number of different organizations on campus as a software engineer, head teaching assistant and student researcher (see more about this under my <a href="\experience">Experience</a>).</p>
            <p>I intend to pursue Cornell's CS Honors, and complete my Master's Degree in Engineering here.</p>

            <div class="container column-section">
              <div class="row align-items-start">
                <div class="education-section">
                  <p class="education-heading"><strong>Activities & Societies</strong></p>
                  <ul>
                    <li>Association For CS Undergraduates</li>
                    <li>CMSX (Software Engineer)</li>
                    <li>Capra (Researcher)</li>
                    <li>Cornell Nexus (Developer)</li>
                    <li>Cornell Lab of Ornithology (Analyst)</li>
                    <li>Cornell Gamelan Ensemble (Musician)</li>
                    <li>Cornell Birding Club</li>
                  </ul>
                  <p><em>More about these under <a href = "/experience">Experience!</a></em></p>
                </div>

                <div class="education-section">
                  <p class="education-heading"><strong>Coursework</strong></p>
                  <ul>
                    <li>Analysis of Algorithms</li>
                    <li>Programming Languages</li>
                    <li>Data Strucures & OOP (Honors)</li>
                    <li>Data Structures & Functional Programming</li>
                    <li>Systems Programming</li>
                    <li>Program Synthesis</li>
                    <li>Advanced Linear Algebra</li>
                    <li>Probability Theory</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="education-box" id="alsion" hidden>
          <h1>Alsion Montessori/Ohlone College</h1>
          <p class="subtext-smol"><em>High School Diploma & Community College Dual Enrollment</em></p>
          <p><strong>Valedictorian (Class of 2022)</strong></p>

          <p>I completed my education from grades 7-12 at Alsion Montessori Middle/High School.</p>
          <p>I enrolled in the Early College program, a highly selective program from grades 10-12 for students exhibiting strong academic qualities to take courses as dually enrolled students at Ohlone Community College.</p>
          <p>I graduated with highest honors and as valedictorian of my graduating class (an award given to a single student exhibiting exceptional academic performance and significant involvement in improving both school and community) in 2022.</p>

          <div class="container column-section">
            <div class="row align-items-start">
              <div class="education-section">
                <p class="education-heading"><strong>Activities & Societies</strong></p>
                <ul>
                  <li>Saberchat (Lead)</li>
                  <li>CS & Programming Elective (Founder & Lead Instructor)</li>
                  <li>Tutor (Spanish & Algebra II)</li>
                  <li>Artificial Intelligence Club (Lead)</li>
                  <li>Ohlone IEEE Chapter (Officer)</li>
                  <li>Ohlone Audubon Chapter (Organizer & Developer)</li>
                </ul>
              </div>

              <div class="education-section">
                <p class="education-heading"><strong>Coursework</strong></p>
                <ul>
                  <li>AP Computer Science A</li>
                  <li>Introduction To Data Structures</li>
                  <li>Discrete Structures</li>
                  <li>AP Calculus BC</li>
                  <li>Linear Algebra</li>
                  <li>Mechanics</li>
                  <li>Differential Equations</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </header>
    </div>
  );
}

export default Education;