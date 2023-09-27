import { Outlet } from 'react-router-dom'
import Products from '../../components/Products'

const ProductsPage = () => {
	return (
		<>
			<Outlet />
			<Products />
		</>
	)
}

export default ProductsPage
