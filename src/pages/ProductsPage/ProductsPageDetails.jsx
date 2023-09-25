import { useParams } from 'react-router-dom'
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

	return (
		<SkeletonTheme baseColor='#202020' highlightColor='#444'>
			<Skeleton count={1} width={300} height={400} borderRadius={22} />
			{isLoading && (
				<Skeleton count={1} width={300} height={400} borderRadius={22} />
			)}
			{error && { error }}
			{singleProduct && <Product product={singleProduct} />}
		</SkeletonTheme>
	)
}

export default ProductsPageDetails
