const Modal = ({ children, toggleModal }) => {
	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
			onClick={toggleModal}
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
