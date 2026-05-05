import { Box, Typography, Chip, Stack, Paper, Grid } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import BuildIcon from '@mui/icons-material/Build'
import CloudIcon from '@mui/icons-material/Cloud'

const programmingLanguages = {
  proficient: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  familiar: ['C', 'C++', 'Go', 'HTML', 'CSS', 'Bash/Shell'],
}

const certifications = [
  'AWS Certified Developer',
  'AWS Cloud Practitioner',
  'Okta Certified Developer',
  'Okta Certified Consultant',
]

const toolsFrameworks = [
  'Spring Boot',
  'Node.js',
  'React',
  'PostgreSQL',
  'gRPC',
  'Docker',
  'GraphQL',
  'Gradle',
  'Git',
  'Vim',
  'Splunk',
  'Datadog',
  'Postman',
  'Swagger',
  'Apollo Explorer',
]

const cloudDevOps = [
  'AWS Amplify',
  'AWS Lambda',
  'API Gateway',
  'EC2',
  'ECS',
  'ECR',
  'SQS',
  'DynamoDB',
  'CI/CD Pipelines',
  'Automation Scripting',
]

const SkillSection = ({ title, icon, children }) => (
  <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      {icon}
      <Typography variant="h6" sx={{ fontWeight: 600, ml: 1 }}>
        {title}
      </Typography>
    </Box>
    {children}
  </Paper>
)

const Skills = () => {
  return (
    <Box sx={{ my: 6, maxWidth: 1100, mx: 0 }}>
      <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 500, letterSpacing: '-0.5px', mb: 4 }}>
        Skills
      </Typography>

      <Grid container spacing={3}>
        {/* Programming Languages */}
        <Grid item xs={12} md={6}>
          <SkillSection title="Programming Languages" icon={<CodeIcon color="primary" />}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'success.main' }}>
              Proficient
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
              {programmingLanguages.proficient.map((lang) => (
                <Chip
                  key={lang}
                  label={lang}
                  color="success"
                  size="small"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'info.main' }}>
              Familiar
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {programmingLanguages.familiar.map((lang) => (
                <Chip
                  key={lang}
                  label={lang}
                  color="info"
                  variant="outlined"
                  size="small"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </SkillSection>
        </Grid>

        {/* Certifications */}
        <Grid item xs={12} md={6}>
          <SkillSection title="Certifications" icon={<WorkspacePremiumIcon color="primary" />}>
            <Stack spacing={1.5}>
              {certifications.map((cert) => (
                <Box
                  key={cert}
                  sx={{
                    p: 1.5,
                    backgroundColor: 'grey.50',
                    borderRadius: 1,
                    borderLeft: 3,
                    borderColor: 'primary.main',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {cert}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </SkillSection>
        </Grid>

        {/* Tools & Frameworks */}
        <Grid item xs={12} md={6}>
          <SkillSection title="Tools & Frameworks" icon={<BuildIcon color="primary" />}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {toolsFrameworks.map((tool) => (
                <Chip
                  key={tool}
                  label={tool}
                  size="small"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </SkillSection>
        </Grid>

        {/* Cloud & DevOps */}
        <Grid item xs={12} md={6}>
          <SkillSection title="Cloud & DevOps" icon={<CloudIcon color="primary" />}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {cloudDevOps.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  color="secondary"
                  size="small"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </SkillSection>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills
