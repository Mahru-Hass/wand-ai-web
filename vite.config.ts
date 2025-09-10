import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
    chunkSizeWarningLimit: 1000,
    cssMinify: 'esbuild'
  },
	server: {
		host: process.env.VITE_HOST || '127.0.0.1',
		port: Number(process.env.VITE_PORT) || 5173,
		strictPort: process.env.VITE_STRICT_PORT === 'true',
	},
	preview: {
		host: process.env.VITE_HOST || '127.0.0.1',
		port: Number(process.env.VITE_PORT) || 5173,
		strictPort: process.env.VITE_STRICT_PORT === 'true',
	},
})
