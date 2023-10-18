import { useSelector } from 'react-redux'
import { authSelector } from '../../store/auth/selector'
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const isAuth = useSelector(authSelector)
	const location = useLocation()
	console.log('location :>> ', location)
	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
}

export default PublicRoute
