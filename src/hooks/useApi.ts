import { useQuery } from '@tanstack/react-query'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:4000'

// Health check query
export function useHealthCheck() {
  return useQuery({
	queryKey: ['health'],
	queryFn: async () => {
	  const response = await fetch(`${API_BASE_URL}/healthz`)
	  if (!response.ok) throw new Error('Health check failed')
	  return response.json()
	},
	refetchInterval: 30000, // Check every 30 seconds
  })
}

