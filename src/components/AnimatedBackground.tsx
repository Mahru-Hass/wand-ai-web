import { useMemo } from 'react';
import { motion } from 'framer-motion';

import { ANIMATION_EASING, generateRandomPositions, generateRandomValues } from '../lib/animations';
import { APP_CONFIG, COLORS } from '../lib/constants';

const AnimatedBackground = () => {
	// Generate random values once for performance
	const orbData = useMemo(() =>
		Array.from({ length: APP_CONFIG.FLOATING_ORBS_COUNT }, (_, i) => ({
			id: i,
			size: generateRandomValues(1, APP_CONFIG.ORB_SIZE_RANGE.min, APP_CONFIG.ORB_SIZE_RANGE.max)[0],
			position: generateRandomPositions(1)[0],
			animation: {
				x: generateRandomValues(1, -50, 50)[0],
				y: generateRandomValues(1, -50, 50)[0],
				duration: generateRandomValues(1, APP_CONFIG.ANIMATION_DURATION_RANGE.min, APP_CONFIG.ANIMATION_DURATION_RANGE.max)[0],
			},
		})), []
	);

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none">
			{orbData.map((orb) => (
				<motion.div
					key={orb.id}
					className={`absolute rounded-full bg-gradient-to-r ${COLORS.GRADIENTS.PURPLE_TO_PINK_OPACITY} blur-xl`}
					style={{
						width: orb.size,
						height: orb.size,
						left: `${orb.position.x}%`,
						top: `${orb.position.y}%`,
					}}
					animate={{
						x: [0, orb.animation.x, 0],
						y: [0, orb.animation.y, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: orb.animation.duration,
						repeat: Infinity,
						ease: ANIMATION_EASING.EASE_IN_OUT,
					}}
				/>
			))}

			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

			<motion.div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage: `
						linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
					`,
					backgroundSize: `${APP_CONFIG.GRID_SIZE}px ${APP_CONFIG.GRID_SIZE}px`,
				}}
				animate={{ backgroundPosition: ['0px 0px', `${APP_CONFIG.GRID_SIZE}px ${APP_CONFIG.GRID_SIZE}px`] }}
				transition={{ duration: 20, repeat: Infinity, ease: ANIMATION_EASING.LINEAR }}
			/>
		</div>
	);
};

export default AnimatedBackground;
