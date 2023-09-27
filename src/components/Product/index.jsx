import { Link, useLocation } from 'react-router-dom'

const Product = ({ product: { thumbnail, title, description, price, id } }) => {
	const location = useLocation()

	return (
		<div className='card' style={{ width: 300 }}>
			<img src={thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{description}</p>
			</div>
			<button className='btn btn-success'>{price}</button>
			{!location.state && (
				<Link to={id.toString()} state={location}>
					Details
				</Link>
			)}
		</div>
	)
}

export default Product
