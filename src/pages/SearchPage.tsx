import ErrorBoundary from '../components/ErrorBoundary';
import SearchPageLayout from '../components/SearchPageLayout';

interface SearchPageProps {
	className?: string;
}

const SearchPage = ({ className = '' }: SearchPageProps) => {
	return (
		<ErrorBoundary>
			<SearchPageLayout className={className} />
		</ErrorBoundary>
	);
};

export default SearchPage;
