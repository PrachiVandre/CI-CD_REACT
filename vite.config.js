import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CI-CD_REACT/",
  server:{
    open: true,
    port: 5173
  }
})
