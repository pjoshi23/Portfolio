import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">PJ</div>
          <div className="nav-links">
            <button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
            <button onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
            <button onClick={() => setActiveSection('research')} className={activeSection === 'research' ? 'active' : ''}>Research</button>
            <button onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
            <button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {activeSection === 'about' && (
          <section className="about-section">
            <h1>Pranav Joshi</h1>
            <h2>Computer Science Student @ UCLA</h2>
            <div className="contact-info">
              <a href="mailto:pjoshi23@ucla.edu">pjoshi23@ucla.edu</a>
              <a href="tel:6692719401">(669) 271-9401</a>
              <a href="https://www.linkedin.com/in/pranav-joshi-3a9a08194/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p className="bio">
              Computer Science student at UCLA with a passion for AI/ML, full-stack development, and research. 
              Currently working on innovative projects in deep learning and software development.
            </p>
          </section>
        )}

        {activeSection === 'experience' && (
          <section className="experience-section">
            <h2>Technical Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>Fullstack Developer</h3>
                <h4>Creative Labs @ UCLA</h4>
                <p className="date">Sep. 2024 - Present</p>
                <ul>
                  <li>Built an AI-enabled calorie-tracking app using React Native, Pytorch, and Firebase</li>
                  <li>Implemented user authentication and social features using Firebase</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h3>AI/ML Developer</h3>
                <h4>ACM @ UCLA</h4>
                <p className="date">Dec 2023 - Present</p>
                <ul>
                  <li>Implemented 2 LLM's from scratch using PyTorch for text-generation</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h3>Software Developer Intern</h3>
                <h4>GrowingIQ</h4>
                <p className="date">Jul. 2023 - Sep. 2023</p>
                <ul>
                  <li>Built a full-featured website using Velo API, Javascript, and SendGrid</li>
                  <li>Created database and integrated with Sendgrid REST APIs</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'research' && (
          <section className="research-section">
            <h2>Research Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>Undergraduate Research Assistant</h3>
                <h4>UCLA Sensing and Robotics for Infrastructure Lab</h4>
                <p className="date">Mar. 2024 - Present</p>
                <ul>
                  <li>Developed Python code for data analysis and risk assessment</li>
                  <li>Built AWS pipeline using ECS and S3</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h3>Research Intern</h3>
                <h4>UCSC Science Internship Program</h4>
                <p className="date">Jun. 2021 - Aug. 2022</p>
                <ul>
                  <li>Designed YOLOv3 object detection model for autonomous drone</li>
                  <li>Applied data science techniques for emotional connection analysis</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>LineWaiter</h3>
                <p className="tech-stack">Python, Flask, React, MongoDB, Git</p>
                <p>Full-stack web application for restaurant line management</p>
              </div>
              <div className="project-card">
                <h3>TaskWizard</h3>
                <p className="tech-stack">SwiftUI, Firebase</p>
                <p>iOS app for personal task management</p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-tags">
                  <span>Python</span>
                  <span>C/C++</span>
                  <span>Swift</span>
                  <span>SQL</span>
                  <span>HTML5</span>
                  <span>CSS</span>
                  <span>Java</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>Matlab</span>
                  <span>R</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Frameworks</h3>
                <div className="skill-tags">
                  <span>ReactJS</span>
                  <span>Python Flask</span>
                  <span>MongoDB</span>
                  <span>PyTorch</span>
                  <span>Tensorflow</span>
                  <span>Pandas</span>
                  <span>Scikit-learn</span>
                  <span>Matplotlib</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Developer Tools</h3>
                <div className="skill-tags">
                  <span>Postman</span>
                  <span>Git</span>
                  <span>Docker</span>
                  <span>Linux/Unix</span>
                  <span>Bash</span>
                  <span>Xcode</span>
                  <span>VS Code</span>
                  <span>IntelliJ</span>
                  <span>AWS</span>
                  <span>Figma</span>
                  <span>Microsoft Excel</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
