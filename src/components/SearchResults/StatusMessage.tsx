import { motion } from 'framer-motion';
import { CheckCircle, Clock, Sparkles } from 'lucide-react';
import type { WebSocketMessage } from '../../types/websocket';

interface StatusMessageProps {
  message: WebSocketMessage;
  index: number;
}

const StatusMessage = ({ message, index }: StatusMessageProps) => {
  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'started':
        return <Clock className="w-5 h-5 text-blue-400 animate-spin" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400/30 bg-green-400/10';
      case 'started':
        return 'border-blue-400/30 bg-blue-400/10';
      case 'planning_complete':
        return 'border-purple-400/30 bg-purple-400/10';
      case 'all_completed':
        return 'border-yellow-400/30 bg-yellow-400/10';
      case 'gemini_complete':
        return 'border-pink-400/30 bg-pink-400/10';
      default:
        return 'border-gray-400/30 bg-gray-400/10';
    }
  };

  return (
    <motion.div
      key={`${message.requestId}-${message.status}-${message.agent || index}`}
      layout
      initial={{ 
        opacity: 0, 
        x: -30, 
        y: 20,
        scale: 0.8,
        rotateX: -15
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1,
        rotateX: 0
      }}
      exit={{ 
        opacity: 0, 
        x: 30, 
        y: -20,
        scale: 0.8,
        rotateX: 15,
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
      transition={{ 
        duration: 0.6, 
        type: "spring", 
        stiffness: 120,
        damping: 15,
        mass: 0.8
      }}
      whileHover={{ 
        scale: 1.02,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className={`p-4 rounded-lg border backdrop-blur-sm ${getStatusColor(message.status)} shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <motion.div 
        className="flex items-start space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.3, 
            duration: 0.5, 
            type: "spring",
            stiffness: 200
          }}
        >
          {getStatusIcon(message.status)}
        </motion.div>
        
        <div className="flex-1">
          <motion.div 
            className="flex items-center space-x-2 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <motion.span 
              className="text-white font-medium capitalize"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {message.status?.replace('_', ' ') || 'Unknown'}
            </motion.span>
            {message.agent && (
              <motion.span 
                className="text-gray-300 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                - {message.agent}
              </motion.span>
            )}
          </motion.div>
          
          {message.selectedAgents && (
            <motion.div 
              className="text-sm text-gray-300 mb-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              Selected agents: {Array.isArray(message.selectedAgents) 
                ? message.selectedAgents.join(', ')
                : message.selectedAgents
              }
            </motion.div>
          )}
          
          {message.result && (
            <motion.div 
              className="text-sm text-gray-300"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              Result: {message.result.result}
            </motion.div>
          )}
          
          {message.totalTime && (
            <motion.div 
              className="text-xs text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
            >
              Total time: {message.totalTime}ms
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StatusMessage;
