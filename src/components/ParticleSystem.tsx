import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_EASING, generateRandomPositions, generateRandomValues } from '../lib/animations';
import { APP_CONFIG } from '../lib/constants';

const ParticleSystem = () => {
	// Generate particle data once for performance
	const particles = useMemo(() =>
		Array.from({ length: APP_CONFIG.PARTICLES_COUNT }, (_, i) => ({
			id: i,
			position: generateRandomPositions(1)[0],
			size: generateRandomValues(1, APP_CONFIG.PARTICLE_SIZE_RANGE.min, APP_CONFIG.PARTICLE_SIZE_RANGE.max)[0],
			duration: generateRandomValues(1, APP_CONFIG.ANIMATION_DURATION_RANGE.min, APP_CONFIG.ANIMATION_DURATION_RANGE.max)[0],
			delay: generateRandomValues(1, 0, 5)[0],
		})), []
	);

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{particles.map((particle) => (
				<motion.div
					key={particle.id}
					className="absolute rounded-full bg-white/20"
					style={{
						left: `${particle.position.x}%`,
						top: `${particle.position.y}%`,
						width: particle.size,
						height: particle.size,
					}}
					animate={{
						y: [0, -100, 0],
						opacity: [0, 1, 0],
						scale: [0, 1, 0],
					}}
					transition={{
						duration: particle.duration,
						delay: particle.delay,
						repeat: Infinity,
						ease: ANIMATION_EASING.EASE_IN_OUT,
					}}
				/>
			))}
		</div>
	);
};

export default ParticleSystem;
