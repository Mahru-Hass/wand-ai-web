import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ANIMATION_DELAY, COMMON_ANIMATIONS } from '../lib/animations';
import { COLORS } from '../lib/constants';

interface InteractiveCardProps {
  onStartJourney: () => void;
}

const InteractiveCard = ({ onStartJourney }: InteractiveCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: ANIMATION_DELAY.LARGE }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${COLORS.GRADIENTS.PURPLE_TO_PINK_OPACITY} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative z-10">
          <motion.div
            {...COMMON_ANIMATIONS.ROTATE_INFINITE}
            className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${COLORS.GRADIENTS.PURPLE_TO_PINK} rounded-full flex items-center justify-center`}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {t('card.title')}
          </h3>
          
          <p className="text-gray-300 text-center mb-6 leading-relaxed">
            {t('card.description')}
          </p>
          
          <motion.button
            onClick={onStartJourney}
            {...COMMON_ANIMATIONS.SCALE_HOVER}
            className={`w-full bg-gradient-to-r ${COLORS.GRADIENTS.PURPLE_TO_PINK} hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group`}
          >
            <span>{t('card.button')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCard;
