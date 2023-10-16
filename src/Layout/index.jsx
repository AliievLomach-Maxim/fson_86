import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import { useDispatch } from 'react-redux'
import { refreshThunk } from '../store/auth/thunks'
import { useEffect } from 'react'

const Layout = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])

	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default Layout
