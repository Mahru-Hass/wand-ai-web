import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const SearchHeader = () => {
	const navigate = useNavigate();

	const handleBackToHome = useCallback(() => {
		navigate('/');
	}, [navigate]);

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="relative z-10 p-6"
		>
			<div className="flex items-center">
				<button
					onClick={handleBackToHome}
					className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
					aria-label="Navigate back to home page"
				>
					<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
					<span>Back to Home</span>
				</button>
			</div>
		</motion.div>
	);
};

export default SearchHeader;
