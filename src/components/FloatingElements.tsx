import { motion } from 'framer-motion';
import { Brain, Cpu, Sparkles, Zap } from 'lucide-react';

import { ANIMATION_EASING } from '../lib/animations';

const FloatingElements = () => {
	const icons = [Sparkles, Zap, Brain, Cpu];

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{icons.map((Icon, index) => (
				<motion.div
					key={index}
					className="absolute text-purple-400/30"
					style={{
						left: `${20 + index * 20}%`,
						top: `${30 + (index % 2) * 40}%`,
					}}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: [0, 1, 0],
						scale: [0, 1, 0],
						rotate: [0, 360],
					}}
					transition={{
						duration: 4,
						delay: index * 0.5,
						repeat: Infinity,
						ease: ANIMATION_EASING.EASE_IN_OUT,
					}}
				>
					<Icon size={32} />
				</motion.div>
			))}
		</div>
	);
};

export default FloatingElements;
