import { useState, useRef, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import CloudIcon from '@mui/icons-material/Cloud'
import BuildIcon from '@mui/icons-material/Build'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import profilePic from '/profilePic.jpg'
import './App.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'coursework', label: 'Coursework' },
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
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const courseworkRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showAppBar, setShowAppBar] = useState(true)
  const lastScrollY = useRef(window.scrollY)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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

  const handleScroll = (sectionId) => {
    const refMap = {
      about: aboutRef,
      experience: experienceRef,
      education: educationRef,
      coursework: courseworkRef,
      skills: skillsRef,
      contact: contactRef
    }
    refMap[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' })
    setDrawerOpen(false)
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // create mailto link with form data
    const mailtoLink = `mailto:diamondacharya139@gmail.com?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
  }
  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{
          transition: 'top 0.3s',
          top: showAppBar ? 0 : '-64px', // hide AppBar by moving it up
          display: { xs: 'block', md: 'block' },
          backgroundColor: '#e8e6e6'
        }}
      >
        <Container maxWidth="md">
          <Toolbar disableGutters sx={{ justifyContent: 'flex-end' }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                edge="start"
                color="inherit"
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
                  color="inherit"
                  onClick={() => handleScroll(section.id)}
                  sx={{ mx: 1 }}
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
              onClick={() => handleScroll(section.id)}
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
              style={{ width: 120, borderRadius: '50%' }}
            />
            <h1>Diamond Acharya</h1>
            <h2>Software Engineer</h2>
          </section>
          <section className="about" ref={aboutRef}>
            <h3>About Me</h3>
            <p>
              I'm a software engineer passionate about building scalable, user-friendly applications. 
              With experience across the full stack, I enjoy solving complex problems and creating 
              elegant solutions that make a real impact.
            </p>
            <p>
              My expertise includes modern web technologies like React, Node.js, and cloud platforms. 
              I'm always eager to learn new technologies and contribute to innovative projects that 
              push the boundaries of what's possible.
            </p>
          </section>

          <section className="experience" ref={experienceRef}>
            <h3><WorkIcon sx={{ verticalAlign: 'middle', mr: 1 }} />Experience</h3>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Card className="experience-card">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <img src="/vite.svg" alt="Company Logo" style={{ width: 50, height: 50, marginRight: 16 }} />
                      <Box>
                        <h4 style={{ margin: 0 }}>Senior Software Engineer</h4>
                        <p style={{ margin: '4px 0', color: '#5f6368' }}>Tech Company Inc.</p>
                        <p style={{ margin: 0, fontSize: '0.9em', color: '#9aa0a6' }}>Jan 2022 - Present</p>
                      </Box>
                    </Box>
                    <p style={{ lineHeight: '1.6', color: '#5f6368' }}>
                      Led development of cloud-native applications, architected microservices infrastructure, 
                      and mentored junior developers. Improved system performance by 40% through optimization 
                      and implemented CI/CD pipelines for faster deployment cycles.
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="experience-card">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <img src="/vite.svg" alt="Company Logo" style={{ width: 50, height: 50, marginRight: 16 }} />
                      <Box>
                        <h4 style={{ margin: 0 }}>Software Engineer</h4>
                        <p style={{ margin: '4px 0', color: '#5f6368' }}>Innovation Labs</p>
                        <p style={{ margin: 0, fontSize: '0.9em', color: '#9aa0a6' }}>Jun 2020 - Dec 2021</p>
                      </Box>
                    </Box>
                    <p style={{ lineHeight: '1.6', color: '#5f6368' }}>
                      Developed full-stack web applications using React and Node.js, collaborated with 
                      cross-functional teams to deliver features on schedule, and contributed to agile 
                      development processes that increased team velocity by 30%.
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </section>

          <section className="education" ref={educationRef}>
            <h3><SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />Education</h3>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Card className="education-card">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <img src="/gatech-buzz.png" alt="Georgia Tech" style={{ width: 50, height: 50, marginRight: 16 }} />
                      <Box>
                        <h4 style={{ margin: 0 }}>Master of Science in Computer Science</h4>
                        <p style={{ margin: '4px 0', color: '#5f6368' }}>Georgia Institute of Technology</p>
                        <p style={{ margin: 0, fontSize: '0.9em', color: '#9aa0a6' }}>2023 - Present</p>
                      </Box>
                    </Box>
                    <p style={{ lineHeight: '1.6', color: '#5f6368' }}>
                      Specializing in Machine Learning and Software Engineering. Focus on distributed systems, 
                      algorithms, and artificial intelligence. GPA: 4.0
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="education-card">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <img src="/princeton-tiger.png" alt="Princeton" style={{ width: 50, height: 50, marginRight: 16 }} />
                      <Box>
                        <h4 style={{ margin: 0 }}>Bachelor of Science in Computer Science</h4>
                        <p style={{ margin: '4px 0', color: '#5f6368' }}>Princeton University</p>
                        <p style={{ margin: 0, fontSize: '0.9em', color: '#9aa0a6' }}>2016 - 2020</p>
                      </Box>
                    </Box>
                    <p style={{ lineHeight: '1.6', color: '#5f6368' }}>
                      Graduated with honors. Relevant coursework in data structures, algorithms, operating systems, 
                      and software engineering. Dean's List all semesters.
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </section>

          <section className="coursework" ref={courseworkRef}>
            <h3>Graduate Coursework</h3>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {[
                { name: 'Machine Learning', description: 'Advanced ML algorithms, neural networks, and deep learning applications' },
                { name: 'Software Architecture', description: 'Design patterns, system architecture, and scalable software design' },
                { name: 'Distributed Systems', description: 'Cloud computing, distributed algorithms, and microservices architecture' },
                { name: 'Computer Vision', description: 'Image processing, object detection, and CNN architectures' },
                { name: 'Natural Language Processing', description: 'Text analysis, transformers, and large language models' },
                { name: 'Database Systems', description: 'Advanced database design, NoSQL, and distributed databases' }
              ].map((course, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card className="course-card">
                    <CardContent>
                      <h4 style={{ margin: '0 0 8px 0', color: '#1a73e8' }}>{course.name}</h4>
                      <p style={{ margin: 0, fontSize: '0.9em', lineHeight: '1.5', color: '#5f6368' }}>
                        {course.description}
                      </p>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </section>

          <section className="skills" ref={skillsRef}>
            <h3>Technical Skills</h3>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ mb: 3 }}>
                <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <CodeIcon sx={{ mr: 1, color: '#1a73e8' }} />
                  Programming Languages
                </h4>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'SQL'].map(skill => (
                    <Chip key={skill} label={skill} className="skill-chip" />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <BuildIcon sx={{ mr: 1, color: '#1a73e8' }} />
                  Frameworks & Libraries
                </h4>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['React', 'Node.js', 'Express', 'Next.js', 'Vue', 'Django', 'Flask', 'Spring Boot'].map(skill => (
                    <Chip key={skill} label={skill} className="skill-chip" />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <StorageIcon sx={{ mr: 1, color: '#1a73e8' }} />
                  Databases & Tools
                </h4>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'DynamoDB'].map(skill => (
                    <Chip key={skill} label={skill} className="skill-chip" />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <h4 style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <CloudIcon sx={{ mr: 1, color: '#1a73e8' }} />
                  Cloud & DevOps
                </h4>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform'].map(skill => (
                    <Chip key={skill} label={skill} className="skill-chip" />
                  ))}
                </Box>
              </Box>
            </Box>
          </section>

          <section className="contact" ref={contactRef}>
            <h3>Get In Touch</h3>
            <p style={{ color: '#5f6368', marginBottom: '24px' }}>
              I'm always interested in new opportunities and collaborations. Fill out the form below 
              and I'll get back to you as soon as possible!
            </p>
            <Box component="form" onSubmit={handleFormSubmit} sx={{ maxWidth: 600, margin: '0 auto' }}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#1a73e8',
                  '&:hover': { backgroundColor: '#1557b0' },
                  textTransform: 'none',
                  fontSize: '1rem',
                  px: 4
                }}
              >
                Send Message
              </Button>
            </Box>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
