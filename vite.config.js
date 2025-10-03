import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // makes sure assets are correctly linked when deployed to GitHub Pages
  plugins: [react()],
})
