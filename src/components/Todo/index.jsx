const Todo = ({ todo, handleDelete }) => {
	return (
		<li className='list-group-item'>
			<h5>title:{todo.title}</h5>
			{todo.description}
			<button
				type='button'
				className='btn-close'
				aria-label='Close'
				onClick={() => handleDelete(todo.id)}
			></button>
		</li>
	)
}

export default Todo
