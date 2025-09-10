import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import { ANIMATION_DELAY, COMMON_ANIMATIONS } from '../lib/animations';
import { COLORS } from '../lib/constants';

const TypewriterWelcome = () => {
	const { t } = useTranslation();

	return (
		<div className="text-center space-y-6">
			<motion.div
				{...COMMON_ANIMATIONS.FADE_IN_UP}
				className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${COLORS.GRADIENTS.PURPLE_TO_BLUE} bg-clip-text text-transparent`}
			>
				{t('app.title')}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: ANIMATION_DELAY.SMALL }}
				className="text-xl md:text-2xl text-gray-300 font-light"
			>
				<TypeAnimation
					sequence={[
						t('welcome.message1'),
						2000,
						t('welcome.message2'),
						2000,
						t('welcome.message3'),
						2000,
						t('welcome.message4'),
						2000,
						t('welcome.message5'),
						2000,
					]}
					wrapper="span"
					speed={50}
					style={{ display: 'inline-block' }}
					repeat={Infinity}
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: ANIMATION_DELAY.MEDIUM }}
				className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed"
			>
				{t('welcome.description')}
			</motion.div>
		</div>
	);
};

export default TypewriterWelcome;
