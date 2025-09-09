// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL,
  TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT),
} as const

// Query Keys
export const QUERY_KEYS = {
  HEALTH: ['health'],
  REQUESTS: ['requests'],
} as const

