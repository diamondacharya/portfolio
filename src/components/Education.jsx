import { useState } from 'react'
import { Box, Typography, Link, Chip, Stack, Grid, Collapse, IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const mastersCoursesTaken = [
  { name: 'Graduate Operating Systems', url: 'https://placeholder.edu/course1' },
  { name: 'Database Systems Concepts & Design', url: 'https://placeholder.edu/course2' },
  { name: 'Computer Networks', url: 'https://placeholder.edu/course3' },
  { name: 'Information Security', url: 'https://placeholder.edu/course4' },
  { name: 'Advanced Machine Learning', url: 'https://placeholder.edu/course5' },
  { name: 'Applied Cryptography', url: 'https://placeholder.edu/course6' },
]

const mastersCoursesPlanned = [
  { name: 'Principles of Computer System Design', url: 'https://placeholder.edu/course7' },
  { name: 'Algorithms and Data Structures', url: 'https://placeholder.edu/course8' },
  { name: 'Distributed Systems', url: 'https://placeholder.edu/course9' },
  { name: 'Software Architecture', url: 'https://placeholder.edu/course10' },
]

const bachelorsCourses = [
  { name: 'Introduction to Programming Systems', url: 'https://placeholder.edu/b1' },
  { name: 'Algorithms and Data Structures', url: 'https://placeholder.edu/b2' },
  { name: 'Computer Science Theory', url: 'https://placeholder.edu/b3' },
  { name: 'Reasoning About Computation', url: 'https://placeholder.edu/b4' },
  { name: 'Computer Architecture', url: 'https://placeholder.edu/b5' },
  { name: 'Operating Systems', url: 'https://placeholder.edu/b6' },
  { name: 'Compilers', url: 'https://placeholder.edu/b7' },
  { name: 'Programming Languages', url: 'https://placeholder.edu/b8' },
  { name: 'Functional Programming', url: 'https://placeholder.edu/b9' },
  { name: 'Advanced Programming Techniques', url: 'https://placeholder.edu/b10' },
  { name: 'Introduction to Machine Learning', url: 'https://placeholder.edu/b11' },
  { name: 'Natural Language Processing', url: 'https://placeholder.edu/b12' },
  { name: 'Computer Vision', url: 'https://placeholder.edu/b13' },
  { name: 'Introduction to Cryptography', url: 'https://placeholder.edu/b14' },
  { name: 'Computer Networks', url: 'https://placeholder.edu/b15' },
  { name: 'Distributed Systems', url: 'https://placeholder.edu/b16' },
  { name: 'Database Systems', url: 'https://placeholder.edu/b17' },
  { name: 'Software Engineering', url: 'https://placeholder.edu/b18' },
  { name: 'Human-Computer Interaction', url: 'https://placeholder.edu/b19' },
  { name: 'Linear Algebra', url: 'https://placeholder.edu/b20' },
  { name: 'Multivariable Calculus', url: 'https://placeholder.edu/b21' },
  { name: 'Differential Equations', url: 'https://placeholder.edu/b22' },
  { name: 'Discrete Mathematics', url: 'https://placeholder.edu/b23' },
  { name: 'Probability and Statistics', url: 'https://placeholder.edu/b24' },
  { name: 'Introduction to Cognitive Science', url: 'https://placeholder.edu/b25' },
  { name: 'Introduction to Robotics', url: 'https://placeholder.edu/b26' },
  { name: 'Senior Thesis I', url: 'https://placeholder.edu/b27' },
  { name: 'Senior Thesis II', url: 'https://placeholder.edu/b28' },
  { name: 'Technical Writing', url: 'https://placeholder.edu/b29' },
  { name: 'Ethics in Computer Science', url: 'https://placeholder.edu/b30' },
]

const Education = () => {
  const [expandedBachelors, setExpandedBachelors] = useState(false)

  return (
    <Box sx={{ my: 6, maxWidth: 1400, mx: 0 }}>
      <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 500, letterSpacing: '-0.5px', mb: 4 }}>
        Education
      </Typography>

      <Grid container spacing={4}>
        {/* Master's */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 4, boxShadow: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img
                src="/gatech-logo.png"
                alt="Georgia Tech Logo"
                style={{ width: 60, height: 60, marginRight: 16, objectFit: 'contain' }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Georgia Institute of Technology
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Jan 2025 - Dec 2026 (Expected)
                </Typography>
              </Box>
            </Box>

            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              Master of Science in Computer Science (Computing Systems)
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
              Courses Taken:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {mastersCoursesTaken.map((course) => (
                <Link
                  key={course.name}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  <Chip
                    label={course.name}
                    clickable
                    size="small"
                    sx={{ mb: 1 }}
                  />
                </Link>
              ))}
            </Stack>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
              Courses Planned:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {mastersCoursesPlanned.map((course) => (
                <Link
                  key={course.name}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  <Chip
                    label={course.name}
                    clickable
                    variant="outlined"
                    size="small"
                    sx={{ mb: 1 }}
                  />
                </Link>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Bachelor's */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 4, boxShadow: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img
                src="/princeton-logo.png"
                alt="Princeton Logo"
                style={{ width: 60, height: 60, marginRight: 16, objectFit: 'contain' }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Princeton University
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  July 2017 - June 2021
                </Typography>
              </Box>
            </Box>

            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 0.5 }}>
              Bachelor of Science in Engineering, Computer Science
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              GPA: 3.46/4.0
            </Typography>

            <Box
              onClick={() => setExpandedBachelors(!expandedBachelors)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                mt: 2,
                '&:hover': { opacity: 0.7 }
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Coursework
              </Typography>
              <IconButton
                size="small"
                sx={{
                  ml: 0.5,
                  transform: expandedBachelors ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s'
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>

            <Collapse in={expandedBachelors}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
                {bachelorsCourses.map((course) => (
                  <Link
                    key={course.name}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <Chip
                      label={course.name}
                      clickable
                      size="small"
                      sx={{ mb: 1 }}
                    />
                  </Link>
                ))}
              </Stack>
            </Collapse>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Education
