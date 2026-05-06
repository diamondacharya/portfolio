import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create mailto link
    const mailtoLink = `mailto:diamondacharya139@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    // Open default email client
    window.location.href = mailtoLink

    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div style={{ margin: '48px 0', maxWidth: '1000px', paddingTop: '52px' }}>
      <div className="section-header">
        &lt;&lt; Contact Me &gt;&gt;
      </div>
      <p style={{ lineHeight: 1.8, color: '#666', marginBottom: '24px' }}>
        Drop me a message!
      </p>

      <div style={{ padding: '24px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', borderRadius: '16px', backgroundColor: 'white' }}>
        {submitted && (
          <div style={{
            padding: '12px 16px',
            backgroundColor: '#d4edda',
            color: '#155724',
            borderRadius: '4px',
            marginBottom: '16px',
            border: '1px solid #c3e6cb'
          }}>
            Thanks for reaching out! Your email client should open shortly.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name and Email side by side */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.875rem', color: '#666' }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.875rem', color: '#666' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.875rem', color: '#666' }}>
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.875rem', color: '#666' }}>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 24px',
              fontSize: '1rem',
              backgroundColor: '#c3c4c6',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#a0a1a3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#c3c4c6'}
          >
            send message →
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
