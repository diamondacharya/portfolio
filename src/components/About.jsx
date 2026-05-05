import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Box sx={{ my: 6, maxWidth: 800, mx: 0 }}>
      <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 500, letterSpacing: '-0.5px' }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
        I'm a software engineer with a passion for building scalable systems and solving complex problems.
        Currently pursuing my Master's in Computer Science at Georgia Tech while working full-time at Pizza Hut,
        where I've built tools that serve thousands of restaurants. I enjoy working across the full stack and have
        experience in everything from authentication systems to high-performance APIs. When I'm not coding, I'm
        probably exploring new technologies or working on side projects. Feel free to reach out if you'd like to connect!
      </Typography>
    </Box>
  )
}

export default About
