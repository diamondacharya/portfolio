import { useState } from 'react'
import profilePic from './assets/profilePic.jpg'
import './App.css'

const App = () => {

  return (
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
      <section className="about">
        <h3>About Me</h3>
        <p>
          Hello! My name is Diamond! This website in under construction. 
        </p>
      </section>
      <section className="projects">
        <h3>Projects</h3>
        <ul>
          <li>
            Project 1 
          </li>
          <li>
              Project 2
          </li>
        </ul>
      </section>
      <section className="contact">
        <h3>Contact</h3>
        <p>
          Feel free to reach out via <a href="mailto:diamondacharya139@gmail.com" target="_blank" rel="noopener noreferrer">email</a>.
        </p>
      </section>
    </main>
  )
}

export default App
