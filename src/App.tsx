import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Router>
			<AnimatePresence mode="wait">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</AnimatePresence>
		</Router>
	);
}

export default App;
