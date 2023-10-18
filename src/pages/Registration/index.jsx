
import FormRegistration from '../../components/Forms/FormRegistration'
import { useDispatch } from 'react-redux'
import { registrationThunk } from '../../store/auth/thunks'

const Registration = () => {
	const dispatch = useDispatch()
	const registration = (body) => {
		dispatch(registrationThunk(body))
	}
	return <FormRegistration registration={registration} />
}

export default Registration
