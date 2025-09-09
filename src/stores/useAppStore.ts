import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AppState {
  currentRequest: string
  isProcessing: boolean
  
  // Actions
  setCurrentRequest: (request: string) => void
  setProcessing: (processing: boolean) => void
  reset: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      // Initial state
      currentRequest: '',
      isProcessing: false,

      // Actions
      setCurrentRequest: (request) => set({ currentRequest: request }),
      setProcessing: (processing) => set({ isProcessing: processing }),
      reset: () => set({ currentRequest: '', isProcessing: false }),
    }),
    { name: 'wand-ai-store' }
  )
)