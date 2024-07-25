import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "/care",
//   plugins: [react()],
//   server: {
//     port: 4000,
//     host: true,
//   },

// })

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: "/care",
    plugins: [react()],
    server: {
      port: 4000,
      host: true,
    },

  })
}
