import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { ANIMATION_DELAY } from '../lib/animations';
import { FEATURES } from '../lib/features';
import { useAppStore } from '../stores/useAppStore';

const FeaturesSection = () => {
  const { t } = useTranslation();
  const { hasSearched } = useAppStore();

  return (
    <AnimatePresence>
      {!hasSearched && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: ANIMATION_DELAY.LARGE + 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t(feature.titleKey, feature.titleDefault)}
              </h3>
              <p className="text-gray-400">
                {t(feature.descriptionKey, feature.descriptionDefault)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeaturesSection;
