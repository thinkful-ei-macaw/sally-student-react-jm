function App(props) {
  return (
    <div>
      <header>
        <h1>{props.name}</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#employment">Employment</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <div>
          <img src="https://avatarfiles.alphacoders.com/177/177262.png" alt="Sally Student"/>
          <p>Hello, humans! I'm a web developer from Cydonia, Mars. Together, we can take your project to intergalactic levels of awesomeness!</p>
        </div>

        <section id="skills">
          <header>
            <h2>Skills</h2>
          </header>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>UI/UX design</li>
          </ul>
        </section>

        <section id="education">
          <header>
            <h2>Education History</h2>
          </header>
          <p>I've been to several terrestrial education facilities. Here's to name a few:</p>
          
          <ul>
            <li>
              <h3>Thinkful</h3>
              <h4>Software Engineering Immersion</h4>
              <h5>2020 - present</h5>
            </li>

            <li>
              <h3>SAE Expression College</h3>
              <h4>AAS Audio Engineering</h4>
              <h5>2018 - 2019</h5>
            </li>
          </ul>
        </section>

        <section id="employment">
          <header>
            <h2>Employment History</h2>
          </header>
          <p>Several companies have had the pleasure of working with me:</p>
          
          <ul>
            <li>
              <h3>Google Inc.</h3>
              <h4>Junior Web Developer</h4>
              <h5>2019 - present</h5>
              <p>Writing well designed, testable, efficient code by using best software development practices, creating website layout/user interfaces by using standard HTML/CSS practices, and integrating data from various back-end services and databases</p>
            </li>
            <li>
              <h3>Small Developers</h3>
              <h4>Senior UX Designer</h4>
              <h5>2017 - 2019</h5>
              <p>Conducting user research and testing, developing wireframes and task flows based on user needs, and collaborating with designers and developers to create intuitive, user-friendly software</p>
            </li>
          </ul>

        </section>

        <section id="contact">
          <header>
            <h2>Contact Me</h2>
          </header>
          <p>I've managed to link up my extremely advanced communication devices with the humanoid primitive systems. Feel free to reach me:</p>
          <address>
            <a className="email" target="_blank" href="mailto:sally.student@marswebdevelopment.com?subject=Hello+from+a+human!">sally.student@marswebdevelopment.com</a>
            <a className="phone" href="tel:1234567899">(123) 456-7899</a>
          </address>
        </section>
      </main>

      <footer>
        <p>&copy; {props.name} 4020. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(
  <App name="Sally Student"/>,
  document.querySelector('#application-root')
)