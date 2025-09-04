import { useState, useEffect } from 'react'
import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import calorIQImg from './assets/caloriq_img.PNG'
import rlCarImg from './assets/rl_car.png'
import linewaiterImg from './assets/linewaiter.png'
import ragsearchImg from './assets/ragsearch.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActiveSection(sectionId)
    setMenuOpen(false)
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 80 // adjust based on navbar height

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
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            Pranav Joshi
          </div>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </button>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I'm Pranav!</h1>
              <h2>Building. Innovating. Making an Impact.</h2>
              <p className="hero-subtitle">B.S. in Computer Science @ UCLA</p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('about')} className="btn-secondary">Learn More</button>
                <button onClick={() => scrollToSection('projects')} className="btn-secondary">View Projects</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-card">
                <div className="card-icon">🤖</div>
                <h3>Agentic AI</h3>
              </div>
              <div className="floating-card">
                <div className="card-icon">🧠</div>
                <h3>Generative AI</h3>
              </div>
              <div className="floating-card">
                <div className="card-icon">📊</div>
                <h3>Machine Learning</h3>
              </div>
              <div className="floating-card">
                <div className="card-icon">💻</div>
                <h3>Full-Stack Development</h3>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="social-links">
              <a href="https://github.com/pjoshi23" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com/in/pranav-joshi-3a9a08194/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          <div className="about-content">
            <div className="about-card">
              <h3>Professional Interests</h3>
              <p>I'm studying Computer Science at UCLA, and have a passion for building impactful software products. I'm especially interested in generative AI, agentic AI, deep learning, machine learning, and full-stack software engineering.</p>
            </div>

            <div className="about-card">
              <h3>Activities</h3>
              <p>At UCLA, I'm involved in ACM AI, Creative Labs, IEEE, and the SRI Lab. I've built an AI-powered nutrition tracking app, a RAG-based search system, an RL agent for autonomous driving, and LLMs for text generation.</p>
            </div>

            <div className="about-card">
              <h3>Hobbies</h3>
              <p>Outside of coding, I love basketball, football, and reading. That same curiosity fuels my approach to engineering: staying engaged, open-minded, and always learning something new.</p>
            </div>

            <div className="about-card">
              <h3>Awards</h3>
              <p>I attended Y Combinator's AI Startup School, hearing from leaders like Sam Altman, Satya Nadella, and Andrej Karpathy. I also received a Certificate of Appreciation from the LA City Council for my work on the LA-Streets research project.</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <h2>Experience</h2>
          <div className="timeline">
            {/* AllyIn */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>AI/ML Engineer Intern</h3>
                <h4>AllyIn.ai</h4>
                <ul>
                  <li>Led development and investor demo of a RAG-based Enterprise Q&A system; integrated semantic search, TTS, and voice cloning with OpenRouter and ElevenLabs; increased engagement by 2x using voice-enabled responses.</li>
                  <li>Applied engineering principles to design a modular multi-agent AI system leveraging GPT-4o, Stable Diffusion, and CoquiTTS to produce multilingual, multimodal, and contextually accurate marketing content.</li>
                </ul>
              </div>
            </div>
            {/* Creative Labs */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Fullstack Developer</h3>
                <h4>Creative Labs @ UCLA</h4>
                <ul>
                  <li>Developed and optimized an AI-powered goal-driven daily diet-tracking iOS application using React Native, Gemini Flash, and Firebase to analyze meal pictures and provide accurate nutritional information.</li>
                  <li>Implemented robust authentication with Firebase Authentication, and real-time data updates via Firestore Listeners, achieving low-latency performance; supported 150+ active users, and increased user retention by 60%.</li>
                </ul>
              </div>
            </div>
            {/* ACM */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>AI/ML Developer</h3>
                <h4>ACM @ UCLA</h4>
                <ul>
                  <li>Developed 2 LLMs from scratch, an RNN and a GPT, for text generation using Tensorflow and BPE, demonstrated principles of transformer architecture and language modeling on Shakespeare's works.</li>
                </ul>
              </div>
            </div>
            {/* SRI Lab */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Undergraduate Research Assistant</h3>
                <h4>UCLA Sensing and Robotics for Infrastructure Lab</h4>
                <ul>
                  <li>Built an AWS pipeline using ECS and S3 to automate weekly updates of LA city datasets, powering an application that enables data-informed infrastructure resilience and urban planning decisions for 1200+ miles of LA streets.</li>
                  <li>Performed data-driven risk assessments, and earned a Certificate of Appreciation from the LA City Council.</li>
                </ul>
              </div>
            </div>
            {/* GrowingIQ */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Software Engineering Intern</h3>
                <h4>Growing IQ</h4>
                <ul>
                  <li>Built a robust full-featured website for Growing IQ’s free trial assessment using Velo API, and Javascript.</li>
                  <li>Architected database to store student data, teacher accounts using Google sign-in, and integrated website with Sendgrid REST APIs to send personalized HTML emails; reducing manual teacher onboarding time by 80%.</li>
                </ul>
              </div>
            </div>
            {/* UCSC */}
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Research Intern</h3>
                <h4>UCSC Science Internship Program</h4>
                <ul>
                  <li>Developed a YOLOv3-based object detection pipeline in PyTorch for autonomous drone navigation with 95% accuracy.</li>
                  <li>Analyzed communication datasets using Python, Numpy, Pandas, and ML/NLP to model emotional connection across mediums.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2>Projects</h2>
          <p className="section-subtitle">Here are a few projects I'm proud of!</p>
          
          <div className="projects-grid">
            {/* CalorIQ */}
            <div className="project-card">
              <div className="project-header">
                <h3>CalorIQ</h3>
                <div className="project-links">
                  <a href="https://github.com/pjoshi23/CalorIQ" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
              <img src={calorIQImg} alt="CalorIQ Screenshot" className="project-image"/>
              <p>Nutrition tracking app with AI-powered food analysis (Gemini Vision API). Features meal logging, animated progress rings, social feed, and user discovery with real-time updates.</p>
            </div>
            {/* RL Autopilot */}
            <div className="project-card">
              <div className="project-header">
                <h3>RL-Autopilot</h3>
                <div className="project-links">
                  <a href="https://github.com/pjoshi23/rl_car_racing" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
              <img src={rlCarImg} alt="RL-Autopilot Screenshot" className="project-image"/>
              <p>Reinforcement learning agent trained in CarRacing-v0 using Deep Q-Learning and CNNs to process high-dimensional image input.</p>
            </div>
            {/* RAGSearch */}
            <div className="project-card">
              <div className="project-header">
                <h3>RAGSearch</h3>
                <div className="project-links">
                  <a href="https://github.com/pjoshi23/rag-search" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
              <img src={ragsearchImg} alt="RAG Search Screenshot" className="project-image"/>
              <p>Multi-modal search system using LangChain agents to route queries across DuckDB, Qdrant, and Neo4j retrievers, producing context-aware Whisper responses.</p>
            </div>
            {/* LineWaiter */}
            <div className="project-card">
              <div className="project-header">
                <h3>LineWaiter</h3>
                <div className="project-links">
                  <a href="https://github.com/pjoshi23/LineWaiter" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
              <img src={linewaiterImg} alt="LineWaiter Screenshot" className="project-image"/>
              <p>Full-stack web app where users post restaurant line listings, and others can accept/wait in line on their behalf. Built with ReactJS, Flask, MongoDB, and Git.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <p className="section-subtitle">These are my strongest technical skills</p>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>C/C++</span>
                <span>Swift</span>
                <span>SQL</span>
                <span>HTML5</span>
                <span>JSON</span>
                <span>CSS</span>
                <span>Java</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Matlab</span>
                <span>R</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span>ReactJS</span>
                <span>React Native</span>
                <span>Node.js</span>
                <span>Flask</span>
                <span>MongoDB</span>
                <span>PyTorch</span>
                <span>TensorFlow</span>
                <span>LangChain</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
                <span>REST APIs</span>
                <span>Matplotlib</span>
                <span>Firebase</span>
                <span>Seaborn</span>
                <span>ElevenLabs</span>
                <span>OpenAI</span>
                <span>OpenRouter</span>
                <span>OpenCV</span>
                <span>Keras</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Developer Tools</h3>
              <div className="skill-tags">
                <span>GitHub Copilot</span>
                <span>Cursor</span>
                <span>Postman</span>
                <span>Git</span>
                <span>Docker</span>
                <span>Linux/Unix</span>
                <span>Bash</span>
                <span>Xcode</span>
                <span>HuggingFace</span>
                <span>AWS</span>
                <span>GCP</span>
                <span>Figma</span>
                <span>VS Code</span>
                <span>IntelliJ</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Areas of Expertise</h3>
              <div className="skill-tags">
                <span>Machine Learning</span>
                <span>Artificial Intelligence</span>
                <span>Full-Stack Development</span>
                <span>Mobile App Development</span>
                <span>Cloud Computing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <div className="contact-content">
            <div className="contact-item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const user = "pjoshi23";
                  const domain = "ucla.edu";
                  window.location.href = `mailto:${user}@${domain}`;
                }}
              >
                <FaEnvelope size={40} />
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://linkedin.com/in/pranav-joshi-3a9a08194/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
