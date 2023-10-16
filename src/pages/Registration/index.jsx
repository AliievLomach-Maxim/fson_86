import { useNavigate } from 'react-router-dom'
import FormRegistration from '../../components/Forms/FormRegistration'
import { useDispatch, useSelector } from 'react-redux'
import { registrationThunk } from '../../store/auth/thunks'
import { authSelector } from '../../store/auth/selector'
import { useEffect } from 'react'

const Registration = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isAuth = useSelector(authSelector)
	const registration = (body) => {
		dispatch(registrationThunk(body))
	}

	useEffect(() => {
		isAuth && navigate('/')
	}, [isAuth, navigate])

	return <FormRegistration registration={registration} />
}

export default Registration
