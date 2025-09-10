import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/');
	};

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center max-w-md mx-auto"
			>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
					className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4"
				>
					404
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="text-2xl font-semibold text-white mb-2"
				>
					Page Not Found
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="text-gray-300 mb-8"
				>
					The page you're looking for doesn't exist or has been moved.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="flex flex-col sm:flex-row gap-4 justify-center"
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleGoHome}
						className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium transition-all hover:shadow-lg"
					>
						<Home className="w-5 h-5" />
						Go Home
					</motion.button>

					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleGoBack}
						className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium transition-all hover:bg-white/20 border border-white/20"
					>
						<ArrowLeft className="w-5 h-5" />
						Go Back
					</motion.button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default NotFoundPage;

