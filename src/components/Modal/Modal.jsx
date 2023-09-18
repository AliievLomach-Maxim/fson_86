import { useEffect } from 'react'

const Modal = ({ children, toggleModal }) => {
	useEffect(() => {
		console.log('render')
	})

	const handleKeyEsc = (e) => {
		if (e.code === 'Escape') this.props.toggleModal()
		console.log('Esc')
	}
	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
			// onClick={toggleModal}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'> Modal</h5>
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={toggleModal}
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal

// class Modal extends Component {
// 	componentDidMount() {
// 		document.addEventListener('keydown', this.handleKeyEsc)
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('keydown', this.handleKeyEsc)
// 	}

// 	handleKeyEsc = (e) => {
// 		if (e.code === 'Escape') this.props.toggleModal()
// 		console.log('Esc')
// 	}

// 	render() {
// 		const { children, toggleModal } = this.props
// 		return (
// 			<div
// 				className='modal fade show'
// 				style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 				// onClick={toggleModal}
// 			>
// 				<div className='modal-dialog'>
// 					<div className='modal-content'>
// 						<div className='modal-header'>
// 							<h5 className='modal-title'> Modal</h5>
// 							<button
// 								type='button'
// 								className='btn-close'
// 								aria-label='Close'
// 								onClick={toggleModal}
// 							></button>
// 						</div>
// 						<div className='modal-body'>{children}</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Modal

// // const Modal = ({ children, toggleModal }) => {
// // 	return (
// // 		<div
// // 			className='modal fade show'
// // 			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// // 			onClick={toggleModal}
// // 		>
// // 			<div className='modal-dialog'>
// // 				<div className='modal-content'>
// // 					<div className='modal-header'>
// // 						<h5 className='modal-title'> Modal</h5>
// // 						<button
// // 							type='button'
// // 							className='btn-close'
// // 							aria-label='Close'
// // 							onClick={toggleModal}
// // 						></button>
// // 					</div>
// // 					<div className='modal-body'>{children}</div>
// // 				</div>
// // 			</div>
// // 		</div>
// // 	)
// // }

// // export default Modal
