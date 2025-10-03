import { useState, useRef } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import profilePic from '/profilePic.jpg'
import './App.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const App = () => {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Container maxWidth="md">
          <Toolbar disableGutters sx={{ justifyContent: 'flex-end' }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                color="inherit"
                onClick={() => {
                  if (section.id === 'about') handleScroll(aboutRef)
                  if (section.id === 'projects') handleScroll(projectsRef)
                  if (section.id === 'contact') handleScroll(contactRef)
                }}
                sx={{ mx: 1 }}
              >
                {section.label}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
      <div className="nonNavContainer">
        <main>
          <section className="hero">
            <img
              src={profilePic}
              alt="profile picture"
              className="profile-img"
              style={{ width: 120, borderRadius: '50%' }}
            />
            <h1>Diamond Acharya</h1>
            <h2>Software Engineer</h2>
            <div className="social-links">
              <a href="https://github.com/diamondacharya" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/diamondacharya" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:diamondacharya139@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
          </section>
          <section className="about" ref={aboutRef}>
            <h3>About Me</h3>
            <p>
              Hello! My name is Diamond! This website in under construction. 
              Hello! My name is Diamond! This website in under construction. 
              Hello! My name is Diamond! This website in under construction. 
              Hello! My name is Diamond! This website in under construction. 
              Hello! My name is Diamond! This website in under construction. 
              Hello! My name is Diamond! This website in under construction. 
              Hello! My name is Diamond! This website in under construction. 
              Hello! My name is Diamond! This website in under construction. 
              Hello! My name is Diamond! This website in under construction. 
            </p>
          </section>
          <section className="projects" ref={projectsRef}>
            <h3>Projects</h3>
            <ul>
              <li> Project 1 </li>
              <li> Project 2 </li>
              <li> Project 1 </li>
              <li> Project 1 </li>
              <li> Project 1 </li>
              <li> Project 1 </li>
              <li> Project 2 </li>
              <li> Project 2 </li>
              <li> Project 2 </li>
              <li> Project 2 </li>
            </ul>
          </section>
          <section className="contact" ref={contactRef}>
            <h3>Contact</h3>
            <p>
              Feel free to reach out via <a href="mailto:diamondacharya139@gmail.com" target="_blank" rel="noopener noreferrer">email</a>.
            </p>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
