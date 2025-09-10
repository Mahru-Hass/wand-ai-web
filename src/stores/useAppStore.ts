import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// WebSocket Message Types
export interface WebSocketMessage {
  requestId?: string;
  status?: string;
  agent?: string;
  result?: {
    result: string;
  };
  geminiSynthesis?: {
    text: string;
    model: string;
    individualResults?: Record<string, string>;
  };
  selectedAgents?: string[];
  totalTime?: number;
}

interface AppState {
  // Search State
  query: string;
  isFocused: boolean;
  hasSearched: boolean;
  
  // WebSocket State
  isConnected: boolean;
  isLoading: boolean;
  messages: WebSocketMessage[];
  error: string | null;
  
  // UI State
  visibleMessages: WebSocketMessage[];
  currentMessageIndex: number;
  isComplete: boolean;
  showFinalResult: boolean;
  
  // Actions
  setQuery: (query: string) => void;
  setIsFocused: (focused: boolean) => void;
  setHasSearched: (searched: boolean) => void;
  
  // WebSocket Actions
  setConnected: (connected: boolean) => void;
  setLoading: (loading: boolean) => void;
  addMessage: (message: WebSocketMessage) => void;
  clearMessages: () => void;
  setError: (error: string | null) => void;
  
  // UI Actions
  setIsComplete: (complete: boolean) => void;
  setShowFinalResult: (show: boolean) => void;
  
  // Combined Actions
  submitSearch: (query: string) => void;
  reset: () => void;
  processMessages: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    (set, get) => ({
      // Initial state
      query: '',
      isFocused: false,
      hasSearched: false,
      isConnected: false,
      isLoading: false,
      messages: [],
      error: null,
      visibleMessages: [],
      currentMessageIndex: 0,
      isComplete: false,
      showFinalResult: false,

      // Search Actions
      setQuery: (query) => set({ query }),
      setIsFocused: (isFocused) => set({ isFocused }),
      setHasSearched: (hasSearched) => set({ hasSearched }),
      
      // WebSocket Actions
      setConnected: (isConnected) => set({ isConnected }),
      setLoading: (isLoading) => set({ isLoading }),
      addMessage: (message) => set((state) => ({ 
        messages: [...state.messages, message] 
      })),
      clearMessages: () => set({ 
        messages: [], 
        visibleMessages: [], 
        currentMessageIndex: 0, 
        isComplete: false, 
        showFinalResult: false 
      }),
      setError: (error) => set({ error }),
      
      // UI Actions
      setIsComplete: (isComplete) => set({ isComplete }),
      setShowFinalResult: (showFinalResult) => set({ showFinalResult }),
      
      // Combined Actions
      submitSearch: (query) => {
        const { isConnected, clearMessages } = get();
        if (query.trim() && isConnected) {
          set({ 
            hasSearched: true, 
            query: query.trim() 
          });
          clearMessages();
        }
      },
      
      processMessages: () => {
        const { messages, currentMessageIndex, isLoading, visibleMessages } = get();
        
        if (messages.length === 0) {
          set({ 
            visibleMessages: [], 
            currentMessageIndex: 0, 
            isComplete: false, 
            showFinalResult: false 
          });
          return;
        }
        
        if (currentMessageIndex < messages.length) {
          const currentMessage = messages[currentMessageIndex];
          
          if (currentMessage.status !== 'connected') {
            let newMessages = [...visibleMessages, currentMessage];
            
            // Remove corresponding started status when completed
            if (currentMessage.status === 'completed' && currentMessage.agent) {
              newMessages = newMessages.filter(msg => 
                !(msg.status === 'started' && msg.agent === currentMessage.agent)
              );
            }
            
            // If this is gemini_complete, show final result immediately
            if (currentMessage.status === 'gemini_complete') {
              set({ 
                visibleMessages: [], 
                currentMessageIndex: currentMessageIndex + 1,
                showFinalResult: true,
                isComplete: true
              });
              return;
            }
            
            set({ 
              visibleMessages: newMessages, 
              currentMessageIndex: currentMessageIndex + 1 
            });
          } else {
            set({ currentMessageIndex: currentMessageIndex + 1 });
          }
        } else if (currentMessageIndex === messages.length && !isLoading) {
          set({ isComplete: true });
          
          // Check if we have a final result to show
          const finalResult = messages.find(msg => msg.geminiSynthesis);
          if (finalResult) {
            setTimeout(() => {
              set({ 
                visibleMessages: [], 
                showFinalResult: true 
              });
            }, 2000);
          }
        }
      },
      
      reset: () => set({ 
        query: '', 
        isFocused: false, 
        hasSearched: false, 
        messages: [], 
        error: null,
        visibleMessages: [],
        currentMessageIndex: 0,
        isComplete: false,
        showFinalResult: false
      }),
    }),
    { name: 'wand-ai-store' }
  )
)