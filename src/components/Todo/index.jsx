import { Component } from 'react'

class Todo extends Component {
	render() {
		const {
			todo: { id, title, completed },
			handleCheck,
			handleDelete,
		} = this.props
		return (
			<li className='list-group-item d-flex justify-content-between'>
				<h5>title:{title}</h5>
				<div className='d-flex'>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							id={id}
							checked={completed}
							onChange={() => handleCheck(id)}
						/>
						<label className='form-check-label' htmlFor={id}>
							completed
						</label>
					</div>
					<button
						type='button'
						className='btn-close'
						aria-label='Close'
						onClick={() => handleDelete(id)}
					></button>
				</div>
			</li>
		)
	}
}

export default Todo
// const Todo = ({ todo, handleDelete }) => {
// 	return (
// 		<li className='list-group-item'>
// 			<h5>title:{todo.title}</h5>
// 			{todo.description}
// 			<button
// 				type='button'
// 				className='btn-close'
// 				aria-label='Close'
// 				onClick={() => handleDelete(todo.id)}
// 			></button>
// 		</li>
// 	)
// }

// export default Todo
