import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 프론트(5173)의 상대경로 fetch('/api/...') 를 백엔드(3001)로 프록시
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
