import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { authSelector, profileSelector } from '../../store/auth/selector'
import { logOut } from '../../store/auth/slice'
import { deleteToken } from '../../api/auth'

const Header = ({ toggleModal }) => {
	const navigate = useNavigate()
	const isAuth = useSelector(authSelector)
	const profile = useSelector(profileSelector)
	const dispatch = useDispatch()

	const handleClick = () => {
		if (isAuth) {
			dispatch(logOut())
			deleteToken()
		} else navigate('/login')
	}

	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<NavLink className='navbar-brand mb-0 h1 text-success' to='/'>
					Navbar
				</NavLink>
				<NavLink className=' mb-0 mx-3 h3 text-white' to='todos'>
					Todos
				</NavLink>
				{/* {isAuth && ( */}
				<Link className=' mb-0 mx-3 h3 text-white' to='users'>
					Users
				</Link>
				{/* )} */}
				<Link className=' mb-0 mx-3 h3 text-white' to='products'>
					Products
				</Link>
				<button onClick={toggleModal} className='btn btn-outline-success'>
					Open Modal
				</button>
				<div className='ms-5'>
					{profile && (
						<>
							<h5 className='text-white'>{profile.firstName}</h5>
							<button
								onClick={() => navigate('/profile')}
								className='btn btn-outline-warning ms-5'
							>
								Profile
							</button>
						</>
					)}
					<button
						onClick={handleClick}
						className='btn btn-outline-success ms-5'
					>
						{isAuth ? 'Log Out' : 'Login'}
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Header
