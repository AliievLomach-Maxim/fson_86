import { useSelector } from 'react-redux'
import { selectorAppState } from '../../store/appState/selectors'

const Loader = () => {
	const { isLoading } = useSelector(selectorAppState)

	return isLoading && <h1>Loading...</h1>
}

export default Loader
