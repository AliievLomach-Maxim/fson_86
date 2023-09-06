import React from 'react'

const FormFilterTodo = ({ filterTodo }) => {
	const handleChange = ({ target: { value } }) => {
		filterTodo(value)
	}
	return (
		<div className='mb-3'>
			<label htmlFor='exampleInputTodo' className='form-label'>
				Filter
			</label>
			<input
				name='title'
				type='text'
				onChange={handleChange}
				className='form-control'
				id='exampleInputTodo'
			/>
		</div>
	)
}

export default FormFilterTodo
