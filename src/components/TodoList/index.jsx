import { Component } from 'react'
import Todo from '../Todo'
import FormCreateTodo from '../../Forms/FormCreateTodo'
import FormFilterTodo from '../../Forms/FormFilterTodo/index'
import { getAllTodo } from '../../api/todo'

class TodoList extends Component {
	state = {
		todo: null,
		filteredTodo: null,
		error: '',
		isLoading: false,
		isShowTodos: false,
	}

	// componentDidMount() {
	// 	this.setState({ isLoading: true })
	// 	getAllTodo(this.state.url)
	// 		.then((data) => this.setState({ todo: data.todos }))
	// 		.catch(({ message }) => this.setState({ error: message }))
	// 		.finally(() => this.setState({ isLoading: false }))
	// }

	// componentDidUpdate(_, prevState) {
	// 	if (prevState.isShowTodos !== this.state.isShowTodos) {
	// 		this.setState({ isLoading: true })
	// 		getAllTodo(this.state.url)
	// 			.then((data) => this.setState({ todo: data.todos }))
	// 			.catch(({ message }) => this.setState({ error: message }))
	// 			.finally(() => this.setState({ isLoading: false }))
	// 	}
	// }
	componentDidUpdate(_, prevState) {
		if (prevState.isShowTodos !== this.state.isShowTodos) {
			this.fetchTodos()
		}
	}

	fetchTodos = async () => {
		try {
			this.setState({ isLoading: true })
			const data = await getAllTodo()
			this.setState({ todo: data.todos })
		} catch ({ message }) {
			this.setState({ error: message })
		} finally {
			this.setState({ isLoading: false })
		}
	}

	handleClick = () => {
		this.setState({ isShowTodos: true })
	}

	handleDelete = (id) => {}

	createTodo = (dataByForm) => {}

	filterTodo = (filterQuery) => {}

	handleCheck = (id) => {}

	render() {
		const { todo, filteredTodo, error, isLoading } = this.state
		const { createTodo, filterTodo, handleCheck, handleDelete, handleClick } =
			this
		return (
			<div className='container'>
				<button className='btn btn-success' onClick={handleClick}>
					Show all todo's
				</button>
				<FormCreateTodo createTodo={createTodo} />
				<FormFilterTodo filterTodo={filterTodo} />
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>{error}</h1>}
				{todo && (
					<ul className='list-group'>
						{(filteredTodo ?? todo).map((el) => (
							<Todo
								todo={el}
								key={el.id}
								handleDelete={handleDelete}
								handleCheck={handleCheck}
							/>
						))}
					</ul>
				)}
			</div>
		)
	}
}

export default TodoList
