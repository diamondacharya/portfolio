import { useState } from 'react'

const mastersCoursesTaken = [
  { name: 'Operating Systems', url: 'https://omscs.gatech.edu/cs-6200-introduction-operating-systems' },
  { name: 'Computer Networks', url: 'https://omscs.gatech.edu/cs-6250-computer-networks' },
  { name: 'Information Security', url: 'https://omscs.gatech.edu/cs-6035-introduction-information-security' },
  { name: 'Database Systems Concepts and Design', url: 'https://omscs.gatech.edu/cs-6400-database-systems-concepts-and-design' },
  { name: 'Applied Cryptography', url: 'https://omscs.gatech.edu/cs-6260-applied-cryptography' },
  { name: 'Machine Learning for Trading', url: 'https://omscs.gatech.edu/cs-7646-machine-learning-trading' },
]

const mastersCoursesPlanned = [
  { name: 'Graduate Algorithms', url: 'https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms' },
  { name: 'High Performance Computer Architecture', url: 'https://omscs.gatech.edu/cs-6290-high-performance-computer-architecture' },
  { name: 'Software Development Process', url: 'https://omscs.gatech.edu/cs-6300-software-development-process' },
  { name: 'Human-Computer Interaction', url: 'https://omscs.gatech.edu/cs-6750-human-computer-interaction' },
]

const bachelorsCourses = [
  { name: 'Algorithms and Data Structures', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Introduction to Programming Systems', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Linear Algebra with Applications', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Multivariable Calculus', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Advanced Programming Techniques', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Economics and Computing', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Fundamentals of Machine Learning', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Introduction to Machine Translation', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Contemporary Logic Design', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'The Mathematics of Secrecy, Search, and Society', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Fundamentals of Statistics', url: 'https://registrar.princeton.edu/course-offerings' },
  { name: 'Principles of Computer System Design', url: 'https://registrar.princeton.edu/course-offerings' },
]

const Education = () => {
  const [expandedBachelors, setExpandedBachelors] = useState(false)
  const [expandedMastersTaken, setExpandedMastersTaken] = useState(false)
  const [expandedMastersPlanned, setExpandedMastersPlanned] = useState(false)

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
                onClick={() => setExpandedMastersTaken(!expandedMastersTaken)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginBottom: '8px'
                }}
              >
                <p style={{ fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>
                  Courses Taken
                </p>
                <span style={{
                  marginLeft: '8px',
                  transform: expandedMastersTaken ? 'rotate(190deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s',
                  display: 'inline-block',
                  fontSize: '0.75rem'
                }}>
                  ▼
                </span>
              </div>

              {expandedMastersTaken && (
                <div style={{ marginTop: '8px' }}>
                  {mastersCoursesTaken.map((course) => (
                    <div key={course.name} style={{ marginBottom: '4px' }}>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#0d47a1',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          display: 'inline-block',
                          padding: '4px 8px',
                          margin: '-4px -8px',
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

            {/* Courses Planned */}
            <div style={{ flex: 1 }}>
              <div
                onClick={() => setExpandedMastersPlanned(!expandedMastersPlanned)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginBottom: '8px'
                }}
              >
                <p style={{ fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>
                  Courses Planned
                </p>
                <span style={{
                  marginLeft: '8px',
                  transform: expandedMastersPlanned ? 'rotate(190deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s',
                  display: 'inline-block',
                  fontSize: '0.75rem'
                }}>
                  ▼
                </span>
              </div>

              {expandedMastersPlanned && (
                <div style={{ marginTop: '8px' }}>
                  {mastersCoursesPlanned.map((course) => (
                    <div key={course.name} style={{ marginBottom: '4px' }}>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#0d47a1',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          display: 'inline-block',
                          padding: '4px 8px',
                          margin: '-4px -8px',
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
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginTop: '16px',
              marginBottom: '8px'
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
            <div style={{ 
              marginTop: '8px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px 16px'
            }}>
              {bachelorsCourses.map((course) => (
                <div key={course.name} style={{ marginBottom: '4px' }}>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#0d47a1',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                      padding: '4px 8px',
                      margin: '-4px -8px',
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
