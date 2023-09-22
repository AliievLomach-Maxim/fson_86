import { useCallback, useEffect, useMemo, useState } from 'react'
import FormSearchProducts from '../Forms/FormSearchProducts/index'
import Product from '../Product'
import { getProductsBySearch } from '../../api/products'

const Products = () => {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [products, setProducts] = useState(null)
	const [searchQuery, setSearchQuery] = useState('')

	const handleSetSearchQuery = (value) => {
		setSearchQuery(value)
	}

	// const sortedProducts =
	// 	products &&
	// 	products.toSorted((a, b) => {
	// 		console.log('sorting')
	// 		for (let i = 0; i < 10000000; i++) {}
	// 		return a.price - b.price
	// 	})
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

	const fetchProducts = useCallback(async () => {
		try {
			setIsLoading(true)
			setProducts(null)
			const data = await getProductsBySearch(searchQuery)
			setProducts(data.products)
		} catch (error) {
			setError(error.response.data)
		} finally {
			setIsLoading(false)
		}
	}, [searchQuery])

	useEffect(() => {
		searchQuery && fetchProducts()
	}, [fetchProducts, searchQuery])

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

// class Products extends Component {
// 	state = { isLoading: false, error: '', products: null, searchQuery: '' }

// 	handleSetSearchQuery = (value) => {
// 		this.setState({ searchQuery: value })
// 	}

// 	componentDidUpdate(_, prevState) {
// 		prevState.searchQuery !== this.state.searchQuery && this.fetchProducts()
// 	}

// 	fetchProducts = async () => {
// 		try {
// 			this.setState({ isLoading: true, products: null })
// 			const data = await getProductsBySearch(this.state.searchQuery)
// 			this.setState({ products: data.products })
// 		} catch (error) {
// 			this.setState({ error: error.response.data })
// 		} finally {
// 			this.setState({ isLoading: false })
// 		}
// 	}

// 	render() {
// 		const { error, isLoading, products } = this.state
// 		return (
// 			<>
// 				{error && <h1>{error}</h1>}
// 				<FormSearchProducts submit={this.handleSetSearchQuery} />
// 				{isLoading && <h1>Loading...</h1>}
// 				{products &&
// 					(!products.length ? (
// 						<h1>No data found</h1>
// 					) : (
// 						products.map((product) => (
// 							<div key={product.id} className='container mt-3'>
// 								<Product product={product} />
// 							</div>
// 						))
// 					))}
// 			</>
// 		)
// 	}
// }

// export default Products
