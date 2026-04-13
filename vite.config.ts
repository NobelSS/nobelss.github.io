import { defineConfig } from 'vite'
// Update this import line:
import react from '@vitejs/plugin-react-oxc'

export default defineConfig({
  plugins: [react()],
})