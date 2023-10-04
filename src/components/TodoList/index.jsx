import { useState } from 'react'
import Todo from '../Todo'
import FormCreateTodo from '../Forms/FormCreateTodo'
import FormFilterTodo from '../Forms/FormFilterTodo'
import { useSelector, useDispatch } from 'react-redux'
import {
	createTodoAction,
	deleteTodo,
	updateTodo,
} from '../../store/todo/slice'
// import { createTodoAction } from '../../store/todo/actions'

const TodoList = () => {
	const { todo } = useSelector((store) => store.todo)
	const dispatch = useDispatch()
	const [filteredTodo, setFilteredTodo] = useState(null)

	const handleDelete = (id) => {
		dispatch(deleteTodo(id))
	}

	const createTodo = (dataByForm) => {
		dispatch(createTodoAction(dataByForm))
	}

	const filterTodo = (filterQuery) => {
		setFilteredTodo(
			todo.filter((el) =>
				el.title.toLowerCase().includes(filterQuery.toLowerCase())
			)
		)
	}

	const handleCheck = (id) => {
		dispatch(updateTodo(id))
	}

	return (
		<div className='container'>
			<FormCreateTodo createTodo={createTodo} />
			<FormFilterTodo filterTodo={filterTodo} />
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

export default TodoList

// class TodoList extends Component {
// 	state = {
// 		todo: null,
// 		filteredTodo: null,
// 		error: '',
// 		isLoading: false,
// 		isShowTodos: false,
// 	}

// 	// componentDidMount() {
// 	// 	this.setState({ isLoading: true })
// 	// 	getAllTodo(this.state.url)
// 	// 		.then((data) => this.setState({ todo: data.todos }))
// 	// 		.catch(({ message }) => this.setState({ error: message }))
// 	// 		.finally(() => this.setState({ isLoading: false }))
// 	// }

// 	// componentDidUpdate(_, prevState) {
// 	// 	if (prevState.isShowTodos !== this.state.isShowTodos) {
// 	// 		this.setState({ isLoading: true })
// 	// 		getAllTodo(this.state.url)
// 	// 			.then((data) => this.setState({ todo: data.todos }))
// 	// 			.catch(({ message }) => this.setState({ error: message }))
// 	// 			.finally(() => this.setState({ isLoading: false }))
// 	// 	}
// 	// }
// 	componentDidUpdate(_, prevState) {
// 		if (prevState.isShowTodos !== this.state.isShowTodos) {
// 			this.fetchTodos()
// 		}
// 	}

// 	fetchTodos = async () => {
// 		try {
// 			this.setState({ isLoading: true })
// 			const data = await getAllTodo()
// 			this.setState({ todo: data.todos })
// 		} catch ({ message }) {
// 			this.setState({ error: message })
// 		} finally {
// 			this.setState({ isLoading: false })
// 		}
// 	}

// 	handleClick = () => {
// 		this.setState({ isShowTodos: true })
// 	}

// 	handleDelete = (id) => {}

// 	createTodo = (dataByForm) => {}

// 	filterTodo = (filterQuery) => {}

// 	handleCheck = (id) => {}

// 	render() {
// 		const { todo, filteredTodo, error, isLoading } = this.state
// 		const { createTodo, filterTodo, handleCheck, handleDelete, handleClick } =
// 			this
// 		return (
// 			<div className='container'>
// 				<button className='btn btn-success' onClick={handleClick}>
// 					Show all todo's
// 				</button>
// 				<FormCreateTodo createTodo={createTodo} />
// 				<FormFilterTodo filterTodo={filterTodo} />
// 				{isLoading && <h1>Loading...</h1>}
// 				{error && <h1>{error}</h1>}
// 				{todo && (
// 					<ul className='list-group'>
// 						{(filteredTodo ?? todo).map((el) => (
// 							<Todo
// 								todo={el}
// 								key={el.id}
// 								handleDelete={handleDelete}
// 								handleCheck={handleCheck}
// 							/>
// 						))}
// 					</ul>
// 				)}
// 			</div>
// 		)
// 	}
// }

// export default TodoList
