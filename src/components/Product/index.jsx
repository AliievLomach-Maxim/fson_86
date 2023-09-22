// import { useContext } from 'react'
// import { GlobalContext } from '../../App'
import { useGlobalContext } from '../../context'

const Product = ({ product: { thumbnail, title, description, price } }) => {
	const value = useGlobalContext()
	// const value = useContext(GlobalContext)
	console.log('value :>> ', value)
	return (
		<div className='card' style={{ width: 300 }}>
			<img src={thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				{value.showContext.toString()}
				<p className='card-text'>{description}</p>
			</div>
			<button className='btn btn-success' onClick={value.setShowContextFn}>
				{price}
			</button>
		</div>
	)
}

export default Product
