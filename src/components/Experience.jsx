import { Box, Typography, Card, CardContent, Grid } from '@mui/material'

const experiences = [
  {
    title: 'Software Engineer III',
    company: 'Pizza Hut',
    location: 'Dallas, TX',
    dates: 'Sept 2022 - Present',
    description:
      "Leading the charge on a full-stack platform that gives franchise owners across the country control of their menus. The system handles everything from pricing tweaks to promotional campaigns, and has basically eliminated the flood of support tickets that used to come through. It's been a fun challenge balancing performance with scale—keeping APIs snappy while supporting thousands of restaurants.",
  },
  {
    title: 'Okta / IAM Technical Consultant',
    company: 'Active Cyber',
    location: 'Dallas, TX',
    dates: 'July 2021 - April 2022',
    description:
      "Spent my days deep in identity and access management, helping companies lock down their authentication flows. Whether it was connecting Active Directory to the cloud or setting up single sign-on for thousands of employees, the goal was always the same: make security seamless. Got to work with some interesting tech stacks and learned a ton about enterprise architecture.",
  },
]

const Experience = () => {
  return (
    <Box sx={{ my: 6, maxWidth: 1000, mx: 'auto' }}>
      <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Experience
      </Typography>
      <Grid container spacing={3}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: '100%',
                boxShadow: 2,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500, mb: 0.5 }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  {exp.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {exp.dates}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                  {exp.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Experience
