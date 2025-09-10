import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useMessageProcessor } from '../hooks/useMessageProcessor';
import { useAppStore } from '../stores/useAppStore';
import FinalResult from './SearchResults/FinalResult';
import LoadingState from './SearchResults/LoadingState';
import StatusMessage from './SearchResults/StatusMessage';

const SearchResults = () => {
	const {
		messages,
		isLoading,
		visibleMessages,
		isComplete,
		showFinalResult,
		setIsComplete,
		setShowFinalResult,
		clearMessages,
		reset,
	} = useAppStore();

	// Process messages with delay
	useMessageProcessor();

	const handleDismiss = () => {
		// Clear all messages and reset state completely
		clearMessages();
		setIsComplete(false);
		setShowFinalResult(false);
		// Also reset the search state to go back to the initial state
		reset();
	};

	// Get the final Gemini result
	const getFinalResult = () => {
		return messages.find(msg => msg.geminiSynthesis);
	};

	if (isLoading && messages.length === 0) {
		return <LoadingState />;
	}

	// Show final result only
	if (showFinalResult) {
		const finalResult = getFinalResult();
		if (!finalResult) return null;
		return <FinalResult finalResult={finalResult} onDismiss={handleDismiss} />;
	}

	if (visibleMessages.length === 0 && !isLoading) {
		return null;
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="space-y-3"
		>
			<div className="flex items-center justify-between mb-3">
				<h3 className="text-xl font-semibold text-white">Processing Status</h3>
				{isComplete && (
					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={handleDismiss}
						className="p-1 text-gray-400 hover:text-white transition-colors"
					>
						<X className="w-4 h-4" />
					</motion.button>
				)}
			</div>

			<AnimatePresence mode="popLayout">
				{visibleMessages.map((message, index) => (
					<StatusMessage key={`${message.requestId}-${message.status}-${message.agent || index}`} message={message} index={index} />
				))}
			</AnimatePresence>

			{isLoading && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex items-center justify-center space-x-2 text-gray-400"
				>
					<motion.div
						className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full"
						animate={{ rotate: 360 }}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: "linear"
						}}
					/>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.3 }}
					>
						Processing...
					</motion.span>
				</motion.div>
			)}
		</motion.div>
	);
};

export default SearchResults;
