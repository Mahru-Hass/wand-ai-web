// Application constants
export const APP_CONFIG = {
	PARTICLES_COUNT: 50,
	FLOATING_ORBS_COUNT: 6,
	FLOATING_ICONS_COUNT: 4,
	GRID_SIZE: 50,
	ANIMATION_DURATION_RANGE: { min: 10, max: 20 },
	PARTICLE_SIZE_RANGE: { min: 1, max: 5 },
	ORB_SIZE_RANGE: { min: 100, max: 400 },
} as const;

export const COLORS = {
	PRIMARY: {
		PURPLE: '#8b5cf6',
		PINK: '#ec4899',
		BLUE: '#3b82f6',
	},
	GRADIENTS: {
		PURPLE_TO_PINK: 'from-purple-400 to-pink-400',
		PURPLE_TO_BLUE: 'from-purple-400 via-pink-400 to-blue-400',
		PURPLE_TO_PINK_OPACITY: 'from-purple-400/20 to-pink-400/20',
	},
} as const;
