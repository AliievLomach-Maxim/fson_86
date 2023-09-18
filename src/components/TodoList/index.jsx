import { Component, useEffect, useState } from 'react'
import Todo from '../Todo'

import { getAllTodo } from '../../api/todo'
import FormCreateTodo from '../Forms/FormCreateTodo'
import FormFilterTodo from '../Forms/FormFilterTodo'
import todoData from '../../data.json'
import { nanoid } from 'nanoid'

const TodoList = () => {
	const [todo, setTodo] = useState(null)
	const [filteredTodo, setFilteredTodo] = useState(null)

	useEffect(() => {
		const localData = localStorage.getItem('todo')
		localData && JSON.parse(localData).length
			? setTodo(JSON.parse(localData))
			: setTodo(todoData)
	}, [])

	useEffect(() => {
		todo && localStorage.setItem('todo', JSON.stringify(todo))
	}, [todo])

	const handleClick = () => {
		this.setState({ isShowTodos: true })
	}

	const handleDelete = (id) => {
		setTodo((prev) => prev.filter((el) => el.id !== id))
	}

	const createTodo = (dataByForm) => {
		const newTodo = {
			...dataByForm,
			id: nanoid(),
			completed: false,
		}
		setTodo((prev) => [...prev, newTodo])
	}

	const filterTodo = (filterQuery) => {
		setFilteredTodo(
			todo.filter((el) =>
				el.title.toLowerCase().includes(filterQuery.toLowerCase())
			)
		)
	}

	const handleCheck = (id) => {
		setTodo((prev) =>
			prev.map((el) =>
				el.id === id ? { ...el, completed: !el.completed } : el
			)
		)
	}

	return (
		<div className='container'>
			<button className='btn btn-success' onClick={handleClick}>
				Show all todo's
			</button>
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
