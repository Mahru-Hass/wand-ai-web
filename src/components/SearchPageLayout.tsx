import BackgroundElements from './BackgroundElements';
import SearchHeader from './SearchHeader';
import SearchTitle from './SearchTitle';
import SearchForm from './SearchForm';
import FeaturesSection from './FeaturesSection';

interface SearchPageLayoutProps {
	className?: string;
}

const SearchPageLayout = ({ className = '' }: SearchPageLayoutProps) => {
	return (
		<div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative ${className}`}>
			{/* Background elements */}
			<BackgroundElements />

			{/* Header */}
			<SearchHeader />

			{/* Main content */}
			<div className="relative z-10 min-h-screen flex items-center justify-center px-4">
				<div className="max-w-5xl w-full mx-auto">
					{/* Title */}
					<SearchTitle />

					{/* Search Form */}
					<SearchForm />

					{/* Features - Only show when not searching */}
					<FeaturesSection />
				</div>
			</div>
		</div>
	);
};

export default SearchPageLayout;
