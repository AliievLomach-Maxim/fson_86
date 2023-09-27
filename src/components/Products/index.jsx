import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import FormSearchProducts from '../Forms/FormSearchProducts/index'
import Product from '../Product'
import { getProductsBySearch } from '../../api/products'
import { useSearchParams } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'

const Products = () => {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [products, setProducts] = useState(null)
	const [searchQuery, setSearchQuery] = useState('')

	const [searchParams] = useSearchParams()

	const query = searchParams.get('search')

	const ref = useRef(query)

	const handleSetSearchQuery = (value) => {
		setSearchQuery(value)
	}

	const sortedProducts = useMemo(() => {
		return (
			products &&
			products.toSorted((a, b) => {
				console.log('sorting')
				for (let i = 0; i < 10000000; i++) {}
				return a.price - b.price
			})
		)
	}, [products])

	const fetchProducts = useCallback(async (searchText) => {
		try {
			setIsLoading(true)
			setProducts(null)
			const data = await getProductsBySearch(searchText)
			setProducts(data.products)
		} catch (error) {
			setError(error.response.data)
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		searchQuery && fetchProducts(searchQuery)
	}, [fetchProducts, searchQuery])

	useEffect(() => {
		ref.current && fetchProducts(ref.current)
	}, [fetchProducts])

	return (
		<>
			{error && <h1>{error}</h1>}
			<FormSearchProducts submit={handleSetSearchQuery} />
			{isLoading && <h1>Loading...</h1>}
			{sortedProducts &&
				(!sortedProducts.length ? (
					<h1>No data found</h1>
				) : (
					sortedProducts.map((product) => (
						<div key={product.id} className='container mt-3'>
							<Product product={product} />
						</div>
					))
				))}
		</>
	)
}

export default Products
