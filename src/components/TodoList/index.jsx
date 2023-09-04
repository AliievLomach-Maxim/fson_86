import { Component } from 'react'
import todo from '../../data.json'
import Todo from '../Todo'

class TodoList extends Component {
	state = { todo }
	handleDelete = (id) => {
		this.setState((prev) => ({
			todo: prev.todo.filter((el) => el.id !== id),
		}))
	}
	render() {
		return (
			<ul className='list-group'>
				{this.state.todo.map((el) => (
					<Todo
						todo={el}
						key={el.id}
						handleDelete={this.handleDelete}
					/>
				))}
			</ul>
		)
	}
}

export default TodoList
