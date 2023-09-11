import { Component } from 'react'
import todo from '../../data.json'
import Todo from '../Todo'
import FormCreateTodo from '../../Forms/FormCreateTodo'
import { nanoid } from 'nanoid'
import FormFilterTodo from '../../Forms/FormFilterTodo/index'

class TodoList extends Component {
	state = { todo: [], filteredTodo: null }

	componentDidMount() {
		const localData = localStorage.getItem('todo')
		if (localData && JSON.parse(localData).length) {
			this.setState({ todo: JSON.parse(localData) })
		} else this.setState({ todo })
	}

	componentDidUpdate(_, prevState) {
		if (prevState.todo.length !== this.state.todo.length) {
			localStorage.setItem('todo', JSON.stringify(this.state.todo))
		}
	}

	updateLocalData = () => {
		localStorage.setItem('todo', JSON.stringify(this.state.todo))
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			todo: prev.todo.filter((el) => el.id !== id),
		}))
	}

	createTodo = (dataByForm) => {
		const isAlreadyExist = this.state.todo.find(
			(el) => el.title === dataByForm.title
		)
		if (isAlreadyExist) return alert('Already Exist')

		const newTodo = {
			...dataByForm,
			completed: false,
			id: nanoid(),
		}
		this.setState((prev) => ({
			todo: [newTodo, ...prev.todo],
		}))
	}

	filterTodo = (filterQuery) => {
		this.setState((prev) => ({
			filteredTodo: prev.todo.filter((el) =>
				el.title.toLowerCase().includes(filterQuery.toLowerCase())
			),
		}))
	}

	handleCheck = (id) => {
		this.setState((prev) => ({
			todo: prev.todo.map((el) =>
				el.id === id ? { ...el, completed: !el.completed } : el
			),
			// todo: prev.todo.map((el) => {
			// 	if (el.id === id) {
			// 		return {
			// 			...el,
			// 			completed: !el.completed,
			// 		}
			// 	} else {
			// 		return el
			// 	}
			// }),
		}))
	}

	render() {
		return (
			<div className='container'>
				<FormCreateTodo createTodo={this.createTodo} />
				<FormFilterTodo filterTodo={this.filterTodo} />
				<ul className='list-group'>
					{(this.state.filteredTodo ?? this.state.todo).map((el) => (
						<Todo
							todo={el}
							key={el.id}
							handleDelete={this.handleDelete}
							handleCheck={this.handleCheck}
							updateLocalData={this.updateLocalData}
						/>
					))}
				</ul>
			</div>
		)
	}
}

export default TodoList
