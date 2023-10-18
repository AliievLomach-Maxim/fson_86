import { useSelector } from 'react-redux'
import { authSelector } from '../../store/auth/selector'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isAuth = useSelector(authSelector)
	const location = useLocation()

	return isAuth ? children : <Navigate to='/login' state={location} />
}

export default PrivateRoute
