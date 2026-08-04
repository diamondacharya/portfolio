import { useState } from 'react'

const mastersCourses = [
  { name: 'Graduate Algorithms', url: 'https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms' },
  { name: 'Operating Systems', url: 'https://omscs.gatech.edu/cs-6200-introduction-operating-systems' },
  { name: 'Computer Networks', url: 'https://omscs.gatech.edu/cs-6250-computer-networks' },
  { name: 'Information Security', url: 'https://omscs.gatech.edu/cs-6035-introduction-information-security' },
  { name: 'Database Systems Concepts and Design', url: 'https://omscs.gatech.edu/cs-6400-database-systems-concepts-and-design' },
  { name: 'Applied Cryptography', url: 'https://omscs.gatech.edu/cs-6260-applied-cryptography' },
  { name: 'Machine Learning for Trading', url: 'https://omscs.gatech.edu/cs-7646-machine-learning-trading' },
  { name: 'Software Development Process', url: 'https://omscs.gatech.edu/cs-6300-software-development-process' },
  { name: 'Human-Computer Interaction', url: 'https://omscs.gatech.edu/cs-6750-human-computer-interaction' },
]

const bachelorsCourses = [
  { name: 'Algorithms and Data Structures', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=002054' },
  { name: 'Principles of Computer System Design', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=015166' },
  { name: 'Advanced Programming Techniques', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=002065' },
  { name: 'Introduction to Programming Systems', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=002053' },
  { name: 'Linear Algebra with Applications', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=004150' },
  { name: 'Multivariable Calculus', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=004149' },
  { name: 'Economics and Computing', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1264&courseid=012095' },
  { name: 'Fundamentals of Machine Learning', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=014294' },
  { name: 'Introduction to Machine Translation', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1264&courseid=010983' },
  { name: 'Contemporary Logic Design', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=002463' },
  { name: 'Fundamentals of Statistics', url: 'https://registrar.princeton.edu/course-offerings/course-details?term=1272&courseid=007996' },
  { name: 'The Mathematics of Secrecy, Search, and Society', url: 'https://registrar.princeton.edu/course-offerings' },
]

const Education = () => {
  const [expandedBachelors, setExpandedBachelors] = useState(false)
  const [expandedMasters, setExpandedMasters] = useState(false)

  return (
    <div style={{ margin: '48px 0', maxWidth: '1400px' }}>
      <div className="section-header">
        &lt;&lt; Education &gt;&gt;
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {/* Master's */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <img
              src="/gatech-gt.png"
              alt="Georgia Tech Logo"
              style={{ width: 60, height: 60, marginRight: 16, objectFit: 'contain' }}
            />
            <div>
              <h4 style={{ fontWeight: 600, margin: 0 }}>
                Georgia Institute of Technology
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#666', margin: '4px 0 0 0' }}>
                Jan 2025 - Present (Expected Dec 2026)
              </p>
            </div>
          </div>

          <p style={{ color: '#666', marginBottom: '16px' }}>
            Master of Science in Computer Science (Computing Systems)
          </p>

          {/* Courses side by side */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
            {/* Courses Taken */}
            <div style={{ flex: 1 }}>
              <div
                onClick={() => setExpandedMasters(!expandedMasters)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginBottom: '8px',
                  padding: '6px 0',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
              >
                <p style={{ fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>
                Relevant Coursework
                </p>
                <span style={{
                  marginLeft: '8px',
                  transform: expandedMasters ? 'rotate(190deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s',
                  display: 'inline-block',
                  fontSize: '0.75rem'
                }}>
                  ▼
                </span>
              </div>

              {expandedMasters && (
                <div style={{ marginTop: '8px' }}>
                  {mastersCourses.map((course) => (
                    <div key={course.name} style={{ borderBottom: '1px solid rgb(193, 190, 190)' }}>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#0d47a1',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          display: 'block',
                          padding: '6px 0',
                          borderRadius: '4px',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        {course.name}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bachelor's */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <img
              src="/princeton-p.png"
              alt="Princeton Logo"
              style={{ width: 60, height: 60, marginRight: 16, objectFit: 'contain' }}
            />
            <div>
              <h4 style={{ fontWeight: 600, margin: 0 }}>
                Princeton University
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#666', margin: '4px 0 0 0' }}>
                July 2017 - June 2021
              </p>
            </div>
          </div>

          <p style={{ color: '#666', marginBottom: '4px' }}>
            Bachelor of Science in Engineering, Computer Science
          </p>
          <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '16px' }}>
              Minor in Linguistics
          </p>

          <div
            onClick={() => setExpandedBachelors(!expandedBachelors)}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginTop: '16px',
              marginBottom: '8px',
              padding: '6px 0',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
          >
            <p style={{ fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>
              Relevant Coursework
            </p>
            <span style={{
              marginLeft: '8px',
              transform: expandedBachelors ? 'rotate(190deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
              display: 'inline-block',
              fontSize: '0.75rem'
            }}>
              ▼
            </span>
          </div>

          {expandedBachelors && (
            <div>
              {bachelorsCourses.map((course) => (
                <div key={course.name} style={{ borderBottom: '1px solid rgb(193, 190, 190)' }}>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#0d47a1',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '6px 0',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    {course.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Education
