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

	// useEffect(() => {
	// 	const localData = localStorage.getItem('todo')
	// 	localData && JSON.parse(localData).length
	// 		? setTodo(JSON.parse(localData))
	// 		: setTodo(todoData)
	// }, [])

	// useEffect(() => {
	// 	todo && localStorage.setItem('todo', JSON.stringify(todo))
	// }, [todo])

	// const handleClick = () => {
	// 	this.setState({ isShowTodos: true })
	// }

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
