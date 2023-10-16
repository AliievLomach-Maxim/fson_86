import { useNavigate } from 'react-router-dom'
import FormLogin from '../../components/Forms/FormLogin'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../store/auth/thunks'
import { authSelector } from '../../store/auth/selector'
import { useEffect } from 'react'

const Login = () => {
	const isAuth = useSelector(authSelector)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const login = (body) => {
		dispatch(loginThunk(body))
	}

	useEffect(() => {
		isAuth && navigate('/')
	}, [isAuth, navigate])

	return <FormLogin login={login} />
}

export default Login
