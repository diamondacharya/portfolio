import { useState } from 'react'
import { Box, Typography, TextField, Button, Paper, Alert } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

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
    <Box sx={{ my: 6, maxWidth: 700, mx: 'auto' }}>
      <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        Contact Me
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Have a question or want to work together? Drop me a message!
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        {submitted && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Thanks for reaching out! Your email client should open shortly.
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={6}
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            size="large"
            fullWidth
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default Contact
