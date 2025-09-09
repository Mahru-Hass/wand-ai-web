import { useTranslation } from 'react-i18next'

function App() {
	const { t } = useTranslation()

	return (
		<div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-white">{t('app.title')}</h1>
				<p className="mt-4 text-neutral-400">{t('app.subtitle')}</p>
			</div>
		</div>
	)
}

export default App
