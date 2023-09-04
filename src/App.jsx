import { Component } from 'react'
import Counter from './components/Counter/Counter'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import TodoList from './components/TodoList'

class App extends Component {
	state = { isShowModal: false }

	toggleModal = () => {
		this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
	}

	render() {
		return (
			<>
				<Header toggleModal={this.toggleModal} />
				{/* <Counter /> */}
				<TodoList />
				{this.state.isShowModal && (
					<Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
				)}
			</>
		)
	}
}

// const App = () => {
// 	return (
// 		<>
// 			<Header />
// 			<Counter />
// 			<Modal>Modal</Modal>
// 		</>
// 	)
// }

export default App
