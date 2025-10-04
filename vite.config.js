import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // makes sure asset paths are correctly resolved
  plugins: [react()],
})
