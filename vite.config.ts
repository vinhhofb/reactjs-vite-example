import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/components'),
      '@service': path.resolve(__dirname, 'src/services'),
      '@util': path.resolve(__dirname, 'src/utils')
    }
  }
})
