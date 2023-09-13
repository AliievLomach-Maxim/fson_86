import { Component } from 'react'

class FormSearchProducts extends Component {
	state = { value: '' }

	handleChange = ({ target: { value } }) => {
		this.setState({ value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.submit(this.state.value)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputTodo' className='form-label'>
						Search products
					</label>
					<input
						name='title'
						type='text'
						onChange={this.handleChange}
						className='form-control'
						id='exampleInputTodo'
						value={this.state.value}
					/>
				</div>
				<button className='btn btn-primary mb-3' type='submit'>
					Search
				</button>
			</form>
		)
	}
}

export default FormSearchProducts
