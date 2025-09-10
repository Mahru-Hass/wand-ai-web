// Static features data - no need to recreate on every render
export const FEATURES = [
	{
		icon: '🤖',
		titleKey: 'search.feature1.title',
		titleDefault: 'AI Agents',
		descriptionKey: 'search.feature1.desc',
		descriptionDefault: 'Multiple specialized agents work together',
	},
	{
		icon: '⚡',
		titleKey: 'search.feature2.title',
		titleDefault: 'Real-time Updates',
		descriptionKey: 'search.feature2.desc',
		descriptionDefault: 'Watch progress as agents complete tasks',
	},
	{
		icon: '🎯',
		titleKey: 'search.feature3.title',
		titleDefault: 'Smart Synthesis',
		descriptionKey: 'search.feature3.desc',
		descriptionDefault: 'Intelligent combination of results',
	},
] as const;
