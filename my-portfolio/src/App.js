import './App.css';

function App() {
  return (
    <div className="App">
      <div class='nav'>
        <ul>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#home">Home</a></li>
        </ul>
      </div>

      <section id='home'>
        <img src='Portfolio 2026.png' class='title' alt='portfolio'></img>
      </section>

      <section id='about'>
        <div class="split-container">
          <div class="split-left">
              <img src='me.png' class='me' alt='meh'></img>
          </div>
          <div class="split-right">
              <h1>about <i>me</i></h1>
              <p class='description'>I'm <b>Jen Natalie Quinto</b>, you can call me Natalie. Currently a 4th Year Information Technology student at NU MOA. I specialize in graphic and web design with nine years of editing and design experience— mostly for personal, and academic use. I’m dedicated in creating captivating and aesthetically pleasing outputs.</p>
          </div>
        </div>
        <div class="row">
          <div class='column'>
            <h4>EXPERIENCE</h4>
            <div class="experience">
              <div class="exp1">
                <p><i>Jul 2024 - Jun 2026</i></p>
                <p><b>THE CORAL WAY STREET JOURNAL - NU MOA</b></p>
                <p>Creative Director</p>
              </div>
              <br></br>
              <div class="exp1">
                <p><i>Aug 2023 - Apr 2024</i></p>
                <p><b>THE CORAL WAY STREET JOURNAL - NU MOA</b></p>
                <p>Associate Art Director</p>
              </div>
            </div>
          </div>
          <div class='column'>
            <h4>EDUCATION</h4>
            <div class="experience">
              <div class="exp1">
                <p><i>Aug 2023 - Present</i></p>
                <p><b>NU MOA</b></p>
                <p>BS Information Technology with Specialization in Mobile and Web Applications</p>
              </div>
              <br></br>
              <div class="exp1">
                <p><i>Jun 2021  - Jul 2023</i></p>
                <p><b>SHS in San Nicholas III, Bacoor City</b></p>
                <p>TVL - ICT</p>
              </div>
            </div>
          </div>
          <div class='column'>
            <h4>SKILLS</h4>
            <div class="skills">
              <li>Team Player</li>
              <li>Mobile and Web Development (Front-End)</li>
              <li>Creative Coding</li>
              <li>Design Direction</li>
            </div>
            
          </div>
        </div>
      </section>

      <section id='projects'>
        <div class="projects">
          <h1>Projects</h1>
          <iframe src="https://www.nu-sis.com" width="600" height="400" title="NU SIS"></iframe>
          <iframe src="https://nrunace.github.io/fleure-frames/" width="600" height="400" title="NU SIS"></iframe>
        </div>
        
      </section>

      <section id='contact'>
        <div class="contact">
          <h3>Contact Me</h3>
          <a href='mailto:jenna.quinto09@gmail.com'>E-mail</a>
          <a href='https://github.com/nrunace'>Github</a>
          <a href='https://www.linkedin.com/in/jen-natalie-quinto-34b755400/'>LinkedIn</a>
        </div>
        
      </section>
    </div>
    
  );
}

export default App;
