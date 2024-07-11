import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  host: '0.0.0.0',
  //change port for production
  preview: {
    port: 4001,
  },
  // for dev
  server: {
    port: 4000,
  },
})
