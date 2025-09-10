import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import FloatingElements from '../components/FloatingElements';
import InteractiveCard from '../components/InteractiveCard';
import ParticleSystem from '../components/ParticleSystem';
import TypewriterWelcome from '../components/TypewriterWelcome';

const HomePage = () => {
	const navigate = useNavigate();

	const handleStartJourney = useCallback(() => {
		navigate('/search');
	}, [navigate]);

	return (
		<div className="min-h-screen relative overflow-hidden">
			{/* Background layers */}
			<AnimatedBackground />
			<ParticleSystem />
			<FloatingElements />

			{/* Main content */}
			<div className="relative z-10 min-h-screen flex items-center justify-center px-4">
				<div className="max-w-6xl mx-auto text-center space-y-12">
					<TypewriterWelcome />
					<InteractiveCard onStartJourney={handleStartJourney} />
				</div>
			</div>

			{/* Bottom gradient fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
		</div>
	);
};

export default HomePage;

