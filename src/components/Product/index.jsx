const Product = ({ product: { thumbnail, title, description, price } }) => {
	return (
		<div className='card'>
			<img src={thumbnail} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{description}</p>
			</div>
			<button className='btn btn-success'>{price}</button>
		</div>
	)
}

export default Product
