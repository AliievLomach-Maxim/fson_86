import { useState } from 'react'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import FormCreateTodo from './components/Forms/FormCreateTodo'
import Products from './components/Products'
import Context from './context'

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)

	const toggleModal = () => {
		setIsShowModal((prev) => !prev.isShowModal)
	}

	return (
		<Context>
			<Header toggleModal={toggleModal} />
			<Products />
			{isShowModal && (
				<Modal toggleModal={toggleModal}>
					<FormCreateTodo />
				</Modal>
			)}
		</Context>
	)
}

export default App
// import { createContext, useState } from 'react'
// import Header from './components/Header/Header'
// import Modal from './components/Modal/Modal'
// import FormCreateTodo from './components/Forms/FormCreateTodo'
// import Products from './components/Products'
// import Context from './context'

// // export const GlobalContext = createContext()

// const App = () => {
// 	const [isShowModal, setIsShowModal] = useState(false)
// 	// const [showContext, setShowContext] = useState(false)

// 	const toggleModal = () => {
// 		setIsShowModal((prev) => !prev.isShowModal)
// 	}
// 	// const setShowContextFn = () => {
// 	// 	setShowContext((prev) => !prev)
// 	// }
// 	return (
// 		<Context>
// 			{/* <GlobalContext.Provider value={{ setShowContextFn, showContext }}> */}
// 			<Header toggleModal={toggleModal} />
// 			<Products />
// 			{isShowModal && (
// 				<Modal toggleModal={toggleModal}>
// 					<FormCreateTodo />
// 				</Modal>
// 			)}
// 			{/* </GlobalContext.Provider> */}
// 		</Context>
// 	)
// }

// export default App

// class App extends Component {
// 	state = { isShowModal: false }

// 	toggleModal = () => {
// 		this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
// 	}

// 	render() {
// 		return (
// 			<>
// 				<GlobalContext.Provider value={'qwrety'}>
// 					<Header toggleModal={this.toggleModal} />
// 					<Products />
// 					{this.state.isShowModal && (
// 						<Modal toggleModal={this.toggleModal}>
// 							<FormCreateTodo />
// 						</Modal>
// 					)}
// 				</GlobalContext.Provider>
// 			</>
// 		)
// 	}
// }

// export default App
