// Reusable animation constants and utilities
export const ANIMATION_DURATION = {
	FAST: 0.3,
	NORMAL: 0.8,
	SLOW: 1.2,
	VERY_SLOW: 2.0,
} as const;

export const ANIMATION_DELAY = {
	NONE: 0,
	SMALL: 0.2,
	MEDIUM: 0.4,
	LARGE: 0.6,
} as const;

export const ANIMATION_EASING = {
	EASE_IN_OUT: "easeInOut",
	EASE_OUT: "easeOut",
	EASE_IN: "easeIn",
	LINEAR: "linear",
} as const;

export const COMMON_ANIMATIONS = {
	FADE_IN_UP: {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: ANIMATION_DURATION.NORMAL },
	},
	FADE_IN_UP_DELAYED: {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: ANIMATION_DURATION.NORMAL, delay: ANIMATION_DELAY.SMALL },
	},
	SCALE_HOVER: {
		whileHover: { scale: 1.05 },
		whileTap: { scale: 0.95 },
	},
	ROTATE_INFINITE: {
		animate: { rotate: 360 },
		transition: { duration: 20, repeat: Infinity, ease: ANIMATION_EASING.LINEAR },
	},
} as const;

// Generate random values once for performance
export const generateRandomValues = (count: number, min: number, max: number) =>
	Array.from({ length: count }, () => Math.random() * (max - min) + min);

export const generateRandomPositions = (count: number) =>
	Array.from({ length: count }, () => ({
		x: Math.random() * 100,
		y: Math.random() * 100,
	}));
