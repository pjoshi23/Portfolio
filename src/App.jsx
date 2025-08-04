import { useState, useEffect } from 'react'
import './App.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
            <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
            <button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I'm Pranav!</h1>
              <h2>Building. Innovating. Making an Impact.</h2>
              <p className="hero-subtitle">Computer Science Student @ UCLA</p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('about')} className="btn-secondary">Learn More</button>
                <button onClick={() => scrollToSection('projects')} className="btn-secondary">View Projects</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-card">
                <div className="card-icon">🤖</div>
                <h3>AI/ML Engineer</h3>
              </div>
              <div className="floating-card">
                <div className="card-icon">💻</div>
                <h3>Full-Stack Developer</h3>
              </div>
              {/* <div className="floating-card">
                <div className="card-icon">🔬</div>
                <h3>Research Assistant</h3>
              </div> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="social-links">
            <a href="https://github.com/pjoshi23" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/pranav-joshi-3a9a08194/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            </div>
          </div>
          
          <div className="about-content">
            <div className="about-card">
              <h3>Professional Interests</h3>
              <p>I'm studying Computer Science at UCLA, and have a passion for building impactful software products. I'm especially interested in AI/ML, computer vision, and full-stack development. I've built autonomous systems, mobile apps, and web platforms, and I enjoy finding elegant solutions to complex problems.</p>
            </div>
            
            <div className="about-card">
              <h3>Activities</h3>
              <p>At UCLA, I'm involved in several organizations like IEEE, Creative Labs, ACM AI, and DevX. I've built an autonomous mini racecar with IEEE, developed an AI-powered nutrition tracking app called Caloriq with Creative Labs, trained language models for Shakespeare-style text generation in ACM AI, and helped build a course planning platform tailored for UCLA students through DevX.</p>
            </div>
            
            <div className="about-card">
              <h3>Hobbies</h3>
              <p>Outside of coding, I love playing basketball and football, diving into a good book, and lately, I’ve been enjoying the challenge of learning tennis. I’m always curious and drawn to activities that push me—whether it’s on the court or through new perspectives in literature. That same curiosity fuels my approach to engineering: staying active, open-minded, and always learning something new.</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Model Research Scientist Intern</h3>
                <h4>AllyIn.ai</h4>
                <p className="date">Jun. 2025 - Present</p>
                <ul>
                  <li>Built a RAG-based Q&A platform with semantic search, TTS, voice cloning using OpenRouter and ElevenLabs; increased engagement by 100% through multilingual, voice-enabled responses and interactive querying</li>
                  <li>Built a modular multi-agent AI system using GPT-4o, Stable Diffusion, and CoquiTTS to generate multilingual, multimodal marketing content, optimized prompt pipelines for contextual grounding</li>                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Fullstack Developer</h3>
                <h4>Creative Labs @ UCLA</h4>
                <p className="date">Sep. 2024 - Present</p>
                <ul>
                  <li>Developed and optimized an AI-powered iOS application using React Native, Gemini Flash, and Firebase to analyze meal pictures and provide accurate nutritional information; engineered daily diet-tracking feature</li>
                  <li>Implemented robust authentication using Firebase Authentication, real-time data processing with Firestore Listeners, deployed app on Firebase Hosting, ensuring scalability and low-latency user experience</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>AI/ML Developer</h3>
                <h4>ACM @ UCLA</h4>
                <p className="date">Dec 2023 - Present</p>
                <ul>
                  <li>Developed 2 LLMs from scratch, an RNN and a GPT, for text generation using Tensorflow and BPE, demonstrated principles of transformer architecture and language modeling on Shakespeare's works</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Undergraduate Research Assistant</h3>
                <h4>UCLA Sensing and Robotics for Infrastructure Lab</h4>
                <p className="date">Mar. 2024 - Dec. 2024</p>
                <ul>
                  <li>Developed Python code to extract and preprocess data from LA City datasets, implemented random forest regression to assess risk level and importance of each street, and compute PCI index using distress information</li>
                  <li>Automated data pipeline deployment on AWS cloud using ECS and S3, ensuring reliable, up-to-date data</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Software Developer Intern</h3>
                <h4>GrowingIQ</h4>
                <p className="date">Jul. 2023 - Sep. 2023</p>
                <ul>
                  <li>Built a robust full-featured website for Growing IQ's free trial assessment using Velo API, and Javascript</li>
                  <li>Architected database to store student data, teacher accounts using Google sign-in, and integrated website with Sendgrid REST APIs to trigger delivery of rich, personalized HTML emails summarizing child's progress</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Research Intern</h3>
                <h4>UCSC Science Internship Program</h4>
                <p className="date">Jun. 2021 - Aug. 2022</p>
                <ul>
                  <li>Built a YOLO-based object detection pipeline in PyTorch for an autonomous drone that interprets natural language commands and navigates toward identified targets; achieved 95% accuracy in diverse environments</li>
                  <li>Used Python, Numpy, and Pandas alongside statistical methods to analyze large-scale communication datasets, applying advanced ML/NLP techniques to model and quantify emotional patterns across different mediums</li>
                </ul>
              </div>
            </div>
          </div>n
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2>Projects</h2>
          <p className="section-subtitle">Here are a few of the projects I'm extremely proud of!</p>
          
          <div className="projects-grid">

            <div className="project-card">
              <div className="project-header">
                <h3>CalorIQ</h3>
                <div className="project-links">
                  <a href="https://github.com/pjoshi23/CalorIQ" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
              <p className="tech-stack">React Native, Firebase, Google Gemini Vision API</p>
              <p>Built a modern nutrition tracking app with AI-powered food analysis using Google Gemini Vision API. Features include meal logging, progress tracking with animated rings, social feed for sharing meals, and user discovery with real-time updates.</p>
            </div>
            
            <div className="project-card">
              <div className="project-header">
                <h3>RL-Autopilot</h3>
                <div className="project-links">
                  <a href="https://github.com/pjoshi23/rl_car_racing" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
              <p className="tech-stack">Python, PyTorch, OpenAI Gym, AWS</p>
              <p>Designed and trained a reinforcement learning agent to autonomously drive in the CarRacing-v0 environment, using deep Q-learning with convolutional neural networks to process high-dimensional image input.</p>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>RAGSearch</h3>
                <div className="project-links">
                  <a href="https://github.com/pjoshi23/LineWaiter" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
              <p className="tech-stack">Python, Flask, React, MongoDB, Git</p>
              <p>Built a multi-modal search system leveraging LangChain agents to intelligently route natural language queries across DuckDB, Qdrant, and Neo4j retrievers, enabling context-aware Whisper responses</p>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>LineWaiter</h3>
                <div className="project-links">
                  <a href="https://github.com/pjoshi23/LineWaiter" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
              <p className="tech-stack">Python, Flask, React, MongoDB, Git</p>
              <p>Developed a full-stack web application using ReactJS, Python Flask, MongoDB, and Git, where users post listings representing restaurant/takeout lines, and other users can accept and wait in line on their behalf.</p>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <p className="section-subtitle">Here are some of my most well-developed skills!</p>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>C/C++</span>
                <span>Swift</span>
                <span>R</span>
                <span>Java</span>
                <span>SQL</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Matlab</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>React Native</span>
                <span>Node.js</span>
                <span>Flask</span>
                <span>PyTorch</span>
                <span>MongoDB</span>
                <span>TensorFlow</span>
                <span>Pandas</span>
                <span>Firebase</span>
                <span>Scikit-learn</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Developer Tools</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>Docker</span>
                <span>AWS</span>
                <span>VS Code</span>
                <span>Xcode</span>
                <span>IntelliJ</span>
                <span>Postman</span>
                <span>Figma</span>
                <span>Linux/Unix</span>
                <span>Bash</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Areas of Expertise</h3>
              <div className="skill-tags">
                <span>Machine Learning</span>
                <span>Full-Stack Development</span>
                <span>Data Science</span>
                <span>Mobile Development</span>
                <span>API Development</span>
                <span>Databases</span>
                <span>Cloud Computing</span>
                {/* <span>DevOps</span> */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p className="section-subtitle">Fill out the form below to send me a message.</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:pjoshi23@ucla.edu">pjoshi23@ucla.edu</a>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <a href="tel:6692719401">(669) 271-9401</a>
              </div>
              <div className="contact-item">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/pranav-joshi-3a9a08194/" target="_blank" rel="noopener noreferrer">Connect with me</a>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <div className="footer-content">
          <p>Made with ❤️ by Pranav Joshi</p>
          <div className="footer-links">
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

export default App
