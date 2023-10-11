import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../../api/products'
import { useEffect, useState } from 'react'
import Product from '../../components/Product'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductsPageDetails = () => {
	const { productId } = useParams()
	const [isLoading, setIsLoading] = useState(false)
	const [singleProduct, setSingleProduct] = useState(null)
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const fetchSingleProduct = async () => {
			try {
				setIsLoading(true)
				setSingleProduct(null)
				setError('')
				const data = await getSingleProduct(productId)
				setSingleProduct(data)
			} catch (error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetchSingleProduct()
	}, [productId])
	const handleClickBackBtn = () => {
		navigate(location.state)
	}

	return (
		<SkeletonTheme baseColor='#202020' highlightColor='#444'>
			<button onClick={handleClickBackBtn} className='btn btn-secondary m-5'>
				{'<'}
			</button>
			{isLoading && (
				<Skeleton count={1} width={300} height={400} borderRadius={22} />
			)}
			{error && { error }}
			{/* {singleProduct && singleProduct.price === 25 ? ( */}
			{singleProduct && <Product product={singleProduct} />}
			{/* // ) : ( // <Navigate to='/' />
			// )} */}
		</SkeletonTheme>
	)
}

export default ProductsPageDetails
