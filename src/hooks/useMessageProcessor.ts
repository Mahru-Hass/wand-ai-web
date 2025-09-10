import { useEffect, useRef } from 'react';
import { useAppStore } from '../stores/useAppStore';

export const useMessageProcessor = () => {
  const { messages, processMessages, currentMessageIndex } = useAppStore();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Only process if we have messages and haven't processed all of them
    if (messages.length > 0 && currentMessageIndex < messages.length) {
      timerRef.current = setTimeout(() => {
        processMessages();
      }, 800); // 800ms delay between each message
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [messages.length, currentMessageIndex, processMessages]);
};
