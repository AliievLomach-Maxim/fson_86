import { Link, NavLink } from 'react-router-dom'

const Header = ({ toggleModal }) => {
	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<NavLink className='navbar-brand mb-0 h1 text-success' to='/home'>
					Navbar
				</NavLink>
				<NavLink className=' mb-0 mx-3 h3 text-white' to='todos'>
					Todos
				</NavLink>
				<Link className=' mb-0 mx-3 h3 text-white' to='products'>
					Products
				</Link>
				<button onClick={toggleModal} className='btn btn-outline-success'>
					Open Modal
				</button>
			</div>
		</nav>
	)
}

export default Header
