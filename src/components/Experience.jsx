
import Chip from '@mui/material/Chip'

const experiences = [
  {
    title: 'Software Engineer III',
    company: 'Pizza Hut',
    logo: '/pizzahut.svg',
    location: 'Dallas, TX',
    dates: 'Sept 2022 - Present',
    description: "Designed and built a self-service menu management platform for 6,000+ U.S. franchise restaurants, reducing support ticket volume by over 95%. Optimized database queries and backend logic to achieve sub-200ms response times for most endpoints.",
    tech: ['Java', 'Spring Boot', 'TypeScript', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Okta Technical Consultant',
    company: 'Active Cyber',
    logo: '/activecyber.png',
    location: 'Dallas, TX',
    dates: 'July 2021 - April 2022',
    description: "Consulted on 15+ enterprise Okta integration engagements, implementing SSO and HR-as-Source workflows using OIDC, OAuth 2.0, and SAML. This enabled secure Identity and Access Management systems for clients, supporting over 10,000 users.",
    tech: ['Okta', 'SAML', 'OAuth 2.0', 'OIDC'],
  },
]

const Experience = () => {
  return (
    <div style={{ margin: '48px 0', maxWidth: '1000px', paddingTop: '52px' }}>
      <div className="section-header">
        &lt;&lt; Experience &gt;&gt;
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="card" style={{ paddingBottom: '0px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <img
                src={exp.logo}
                alt={`${exp.company} Logo`}
                style={{ width: 60, height: 60, marginRight: 16, objectFit: 'contain' }}
              />
              <div>
                <h4 style={{ fontWeight: 600, margin: 0 }}>
                  {exp.title}
                </h4>
                <p style={{ color: '#173757', fontWeight: 500, margin: '4px 0 0 0', fontSize: '0.875rem' }}>
                  {exp.company}
                </p>
              </div>
            </div>
            
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '4px', marginTop: 0 }}>
              {exp.location}
            </p>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '16px', marginTop: 0 }}>
              {exp.dates}
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, marginTop: 0, marginBottom: '26px', color: '#444' }}>
              {exp.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
              {exp.tech.map(t => (
                <Chip key={t} label={t} variant="outlined" style={{ fontSize: '0.8rem' }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
