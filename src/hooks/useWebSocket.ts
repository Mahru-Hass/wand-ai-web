import { useCallback, useEffect, useRef } from 'react';
import { useAppStore, type WebSocketMessage } from '../stores/useAppStore';

interface UseWebSocketReturn {
  sendMessage: (message: string) => void;
}

export const useWebSocket = (url: string): UseWebSocketReturn => {
  const {
    setConnected,
    setLoading,
    addMessage,
    setError,
  } = useAppStore();

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        setConnected(true);
        setError(null);
        console.log('WebSocket connected');
      };

      ws.onmessage = (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          addMessage(message);
          
          // Handle different message types
          if (message.status === 'all_completed' || message.status === 'gemini_complete') {
            setLoading(false);
          }
        } catch (err) {
          console.error('Error parsing WebSocket message:', err);
        }
      };

      ws.onclose = () => {
        setConnected(false);
        setLoading(false);
        
        // Attempt to reconnect after 3 seconds
        reconnectTimeoutRef.current = setTimeout(() => {
          if (wsRef.current?.readyState === WebSocket.CLOSED) {
            connect();
          }
        }, 3000);
      };

      ws.onerror = (error) => {
        setError('WebSocket connection error');
        setLoading(false);
        console.error('WebSocket error:', error);
      };
    } catch {
      setError('Failed to create WebSocket connection');
      setLoading(false);
    }
  }, [url, setConnected, setError, addMessage, setLoading]);

  const sendMessage = useCallback((message: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      const payload = JSON.stringify({ request: message });
      wsRef.current.send(payload);
      setLoading(true);
      setError(null);
    } else {
      setError('WebSocket not connected');
    }
  }, [setLoading, setError]);

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [connect]);

  return {
    sendMessage,
  };
};
