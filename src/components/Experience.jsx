

const experiences = [
  {
    title: 'Software Engineer III',
    company: 'Pizza Hut',
    logo: '/pizzahut.svg',
    location: 'Dallas, TX',
    dates: 'Sept 2022 - Present',
    // description: "Leading the charge on a full-stack platform that gives franchise owners across the country control of their menus. The system handles everything from pricing tweaks to promotional campaigns, and has basically eliminated the flood of support tickets that used to come through. It's been a fun challenge balancing performance with scale—keeping APIs snappy while supporting thousands of restaurants.",
    description: "Full stack deevelopment \n [Java, Spring Boot, TypeScript, React, PostgreSQL]",
  },
  {
    title: 'Okta / IAM Technical Consultant',
    company: 'Active Cyber',
    logo: '/activecyber.png',
    location: 'Dallas, TX',
    dates: 'July 2021 - April 2022',
    // description: "Spent my days deep in identity and access management, helping companies lock down their authentication flows. Whether it was connecting Active Directory to the cloud or setting up single sign-on for thousands of employees, the goal was always the same: make security seamless. Got to work with some interesting tech stacks and learned a ton about enterprise architecture.",
    description: "Identity and Access Management \n [SAML, OAuth, OIDC]",
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
          <div key={index} className="card">
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
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, marginTop: 0, color: '#666' }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
