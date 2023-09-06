import { Component } from 'react'
import todo from '../../data.json'
import Todo from '../Todo'
import FormCreateTodo from '../../Forms/FormCreateTodo'
import { nanoid } from 'nanoid'
import FormFilterTodo from '../../Forms/FormFilterTodo/index'

class TodoList extends Component {
	state = { todo, filteredTodo: null }
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

	render() {
		return (
			<div className='container'>
				<FormCreateTodo createTodo={this.createTodo} />
				<FormFilterTodo filterTodo={this.filterTodo} />
				<ul className='list-group'>
					{(this.state.filteredTodo ?? this.state.todo).map((el) => (
						<Todo todo={el} key={el.id} handleDelete={this.handleDelete} />
					))}
				</ul>
			</div>
		)
	}
}

export default TodoList
