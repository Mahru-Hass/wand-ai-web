import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Send } from 'lucide-react';

import { useAppStore } from '../stores/useAppStore';
import { useWebSocket } from '../hooks/useWebSocket';
import { ANIMATION_DELAY } from '../lib/animations';
import { COLORS } from '../lib/constants';
import SearchResults from './SearchResults';

const SearchForm = () => {
  const { t } = useTranslation();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Zustand store state
  const {
    query,
    isFocused,
    isConnected,
    isLoading,
    setQuery,
    setIsFocused,
    submitSearch,
  } = useAppStore();

  // WebSocket connection
  const { sendMessage } = useWebSocket(
    import.meta.env.VITE_WS_URL || 'ws://127.0.0.1:4000/ws'
  );

  // Event handlers
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && isConnected) {
      submitSearch(query.trim());
      sendMessage(query.trim());
    }
  }, [query, isConnected, submitSearch, sendMessage]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
    
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = '48px';
    
    const scrollHeight = textarea.scrollHeight;
    const maxHeight = 200;
    const newHeight = Math.min(scrollHeight, maxHeight);
    
    textarea.style.height = newHeight > 48 ? `${newHeight}px` : '48px';
  }, [setQuery]);

  const handleFocus = useCallback(() => setIsFocused(true), [setIsFocused]);
  const handleBlur = useCallback(() => setIsFocused(false), [setIsFocused]);

  // Reset textarea height when query becomes empty
  useEffect(() => {
    if (textareaRef.current && !query.trim()) {
      textareaRef.current.style.height = '48px';
    }
  }, [query]);

  // Computed values
  const isSubmitDisabled = !query.trim() || !isConnected || isLoading;
  const submitButtonClasses = isSubmitDisabled
    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
    : `bg-gradient-to-r ${COLORS.GRADIENTS.PURPLE_TO_PINK} text-white shadow-lg hover:shadow-xl`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: ANIMATION_DELAY.MEDIUM }}
      className="relative"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`relative bg-white/10 backdrop-blur-xl border-2 rounded-2xl p-3 transition-all ${
            isFocused
              ? 'border-purple-400/50 shadow-2xl shadow-purple-500/20'
              : 'border-white/20 hover:border-white/30'
          }`}
        >
          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className={`w-5 h-5 transition-colors ${
              isFocused ? 'text-purple-400' : 'text-gray-400'
            }`} />
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={query}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={t('search.placeholder', 'Describe your business challenge...')}
            className="w-full pl-12 pr-16 bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none resize-none min-h-[48px] max-h-[200px] leading-relaxed scrollbar-hide"
            aria-label="Search input for business challenges"
            autoComplete="off"
            spellCheck="false"
            rows={1}
            style={{ 
              height: '48px',
              paddingTop: '12px',
              paddingBottom: '12px',
              lineHeight: '1.5',
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitDisabled}
            whileHover={!isSubmitDisabled ? { scale: 1.05 } : {}}
            whileTap={!isSubmitDisabled ? { scale: 0.95 } : {}}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all ${submitButtonClasses}`}
            aria-label={isLoading ? "Processing request" : "Submit search"}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </motion.button>
        </div>
        
        {/* Search Results - Inline */}
        <div className="mt-4 mb-8">
          <SearchResults />
        </div>
      </form>
    </motion.div>
  );
};

export default SearchForm;
