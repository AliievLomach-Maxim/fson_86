import { Component } from 'react'

class Counter extends Component {
	state = {
		counter: 0,
		items: [],
	}

	handleClickIncrement = () =>
		this.setState((prev) => ({ counter: prev.counter + 1 }))
	handleClickDecrement = () =>
		this.setState((prev) => ({ counter: prev.counter - 1 }))

	render() {
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div
					className='card bg-dark text-white '
					style={{ width: '600px' }}
				>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p
							className='card-text  text-center'
							style={{ fontSize: '80px' }}
						>
							{this.state.counter}
						</p>
						<div className='d-flex justify-content-center px-5'>
							<button
								onClick={this.handleClickIncrement}
								className='btn btn-outline-success me-5'
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button>
							<button
								onClick={this.handleClickDecrement}
								className='btn  btn-outline-danger ms-5'
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
// const Counter = () => {
// 	let counter = 0
// 	const handleClick = () => {
// 		counter++
// 		console.log(counter)
// 	}
// 	return (
// 		<div className='position-absolute top-50 start-50 translate-middle'>
// 			<div
// 				className='card bg-dark text-white '
// 				style={{ width: '600px' }}
// 			>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p
// 						className='card-text  text-center'
// 						style={{ fontSize: '80px' }}
// 					>
// 						{counter}
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button
// 							onClick={handleClick}
// 							className='btn btn-outline-success me-5'
// 						>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>
// 						<button className='btn  btn-outline-danger ms-5'>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
export default Counter

// const user = {
// 	name: 'Alex',
// 	age: 30,
// }

// user.name = 'Bob'

// handleClick = () => {
// 	// this.setState({
// 	// 	counter: 10,
// 	// })
// 	// counter = counter + 1
// 	this.setState((prev) => ({ counter: prev.counter + 1 }))
// 	// this.setState((prev) => {
// 	// 	return { counter: prev.counter + 1 }
// 	// })
// }
