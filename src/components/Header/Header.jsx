// import { useContext } from 'react'
// import { GlobalContext } from '../../App'
import { useGlobalContext } from '../../context'

const Header = ({ toggleModal }) => {
	const { setShowContextFn } = useGlobalContext()
	// const { setShowContextFn } = useContext(GlobalContext)

	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>Navbar</span>
				<button onClick={toggleModal} className='btn btn-outline-success'>
					Open Modal
				</button>
				<button onClick={setShowContextFn} className='btn btn-outline-success'>
					ShowContext
				</button>
			</div>
		</nav>
	)
}

export default Header
