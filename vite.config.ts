import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ffbeast-web-app/',
  plugins: [react()],
  server: { open: true }
})
