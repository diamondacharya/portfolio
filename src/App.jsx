import { useState, useRef, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import profilePic from '/profilePic.jpg'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: "https://linkedin.com/in/diamondacharya",
    img: "/linkedin.png",
    alt: "LinkedIn"
  },
  {
    href: "https://github.com/diamondacharya",
    img: "/github.png",
    alt: "GitHub"
  },
  {
    href: "mailto:diamondacharya139@gmail.com",
    img: "/email.png",
    alt: "Email"
  }
]

const App = () => {
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showAppBar, setShowAppBar] = useState(true)
  const lastScrollY = useRef(window.scrollY)

  // show AppBar when scrolling up, hide when scrolling down (for desktop)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setShowAppBar(true);
      } else {
        setShowAppBar(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setDrawerOpen(false)
  }
  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: '#2c3e50',
          transition: 'top 0.3s',
          top: showAppBar ? 0 : '-64px',
          display: { xs: 'block', md: 'block' }
        }}
      >
        <Container maxWidth="md">
          <Toolbar disableGutters sx={{ justifyContent: 'flex-end' }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                edge="start"
                sx={{ color: 'white' }}
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              {sections.map((section) => (
                <Button
                  key={section.id}
                  onClick={() => {
                    if (section.id === 'about') handleScroll(aboutRef)
                    if (section.id === 'education') handleScroll(educationRef)
                    if (section.id === 'experience') handleScroll(experienceRef)
                    if (section.id === 'skills') handleScroll(skillsRef)
                    if (section.id === 'contact') handleScroll(contactRef)
                  }}
                  sx={{ mx: 1, color: 'white' }}
                >
                  {section.label}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {socialLinks.map(link => (
                <IconButton
                  key={link.alt}
                  component="a"
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  sx={{ p: 0.5 }}
                >
                  <img src={link.img} alt={link.alt} style={{ width: 24, height: 24 }} />
                </IconButton>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 200, p: 2 }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              color="inherit"
              fullWidth
              onClick={() => {
                if (section.id === 'about') handleScroll(aboutRef)
                if (section.id === 'education') handleScroll(educationRef)
                if (section.id === 'experience') handleScroll(experienceRef)
                if (section.id === 'skills') handleScroll(skillsRef)
                if (section.id === 'contact') handleScroll(contactRef)
              }}
              sx={{ mb: 1 }}
            >
              {section.label}
            </Button>
          ))}
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            {socialLinks.map(link => (
              <IconButton
                key={link.alt}
                component="a"
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                sx={{ p: 0.5 }}
              >
                <img src={link.img} alt={link.alt} style={{ width: 24, height: 24 }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Drawer>
      <div className="nonNavContainer">
        <main>
          <section className="hero">
            <img
              src={profilePic}
              alt="profile picture"
              className="profile-img"
              style={{ width: 180, borderRadius: '50%' }}
            />
            <h1>Diamond Acharya</h1>
            <h2>Software Engineer</h2>
          </section>
          <section ref={aboutRef}>
            <About />
          </section>
          <section ref={educationRef}>
            <Education />
          </section>
          <section ref={experienceRef}>
            <Experience />
          </section>
          {/* <section ref={skillsRef}>
            <Skills />
          </section> */}
          <section ref={contactRef}>
            <Contact />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
