
import FormLogin from '../../components/Forms/FormLogin'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../store/auth/thunks'
import toast from 'react-hot-toast'

const Login = () => {
	const dispatch = useDispatch()

	// const login = (body) => {
	// 	dispatch(loginThunk(body))
	// 		.unwrap()
	// 		.then(() =>
	// 			toast.success('Welcome', { duration: 3000, position: 'top-right' })
	// 		)
	// 		.catch((error) =>
	// 			toast.error(error.error, { duration: 3000, position: 'top-right' })
	// 		)
	// }

	const login = async (body) => {
		try {
			await dispatch(loginThunk(body)).unwrap()
			toast.success('Welcome', { duration: 3000, position: 'top-right' })
		} catch (error) {
			toast.error(error.error, { duration: 3000, position: 'top-right' })
		}
	}
	return <FormLogin login={login} />
}

export default Login
