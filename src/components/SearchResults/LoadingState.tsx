import { motion } from 'framer-motion';

const LoadingState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="mt-8 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg"
    >
      <div className="flex items-center justify-center space-x-3">
        <motion.div 
          className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.span
          className="text-white text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Processing your request...
        </motion.span>
      </div>
    </motion.div>
  );
};

export default LoadingState;
