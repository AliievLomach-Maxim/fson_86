import { Component } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import TodoList from './components/TodoList'
import Products from './components/Products'

class App extends Component {
	state = { isShowModal: false }

	toggleModal = () => {
		this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
	}

	render() {
		return (
			<>
				<Header toggleModal={this.toggleModal} />
				<Products />
				{/* <TodoList />
				{this.state.isShowModal && (
					<Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
				)} */}
			</>
		)
	}
}

export default App
