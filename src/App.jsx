import { Component } from 'react'
import Header from './components/Header/Header'
import TodoList from './components/TodoList'
import Modal from './components/Modal/Modal'
import FormCreateTodo from './components/Forms/FormCreateTodo'
// import Products from './components/Products'

class App extends Component {
	state = { isShowModal: false }

	toggleModal = () => {
		this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
	}

	render() {
		return (
			<>
				<Header toggleModal={this.toggleModal} />
				<TodoList />
				{this.state.isShowModal && (
					<Modal toggleModal={this.toggleModal}>
						<FormCreateTodo />
					</Modal>
				)}
			</>
		)
	}
}

export default App
