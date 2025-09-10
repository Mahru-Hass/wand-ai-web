import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ANIMATION_DELAY } from '../lib/animations';

const SearchTitle = () => {
	const { t } = useTranslation();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: ANIMATION_DELAY.SMALL }}
			className="text-center mb-12"
		>
			<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
				{t('search.title', 'Ask Anything')}
			</h1>
			<p className="text-xl text-gray-300 max-w-2xl mx-auto">
				{t('search.subtitle', 'Describe your business challenge and let our AI agents work together to solve it')}
			</p>
		</motion.div>
	);
};

export default SearchTitle;
