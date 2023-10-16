const FormRegistration = ({ registration }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const { name, email, password } = e.target.elements
		registration({
			firstName: name.value,
			email: email.value,
			password: password.value,
		})
	}
	return (
		<div className='card p-5 mx-auto' style={{ width: 500 }}>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputName' className='form-label'>
						Name
					</label>
					<input
						type='text'
						name='name'
						className='form-control'
						id='exampleInputName'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputPassword1' className='form-label'>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Registration
				</button>
			</form>
		</div>
	)
}

export default FormRegistration
