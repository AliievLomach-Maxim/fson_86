import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodoPage from './pages/TodoPage'
import ProductsPage from './pages/ProductsPage'
import Layout from './Layout'
import { Suspense, lazy } from 'react'
import './store/store'
import UsersPage from './pages/UsersPage'
import Loader from './components/Loader'

const ProductsPageDetails = lazy(() =>
	import('./pages/ProductsPage/ProductsPageDetails')
)
const Login = lazy(() => import('./pages/Login'))
const Registration = lazy(() => import('./pages/Registration/index'))

const App = () => {
	return (
		<>
			<Loader />

			<Suspense fallback={'Loading.....'}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='todos' element={<TodoPage />} />
						<Route path='users' element={<UsersPage />} />
						<Route path='products' element={<ProductsPage />} />
						<Route
							path='products/:productId'
							element={<ProductsPageDetails />}
						/>
						<Route path='/login' element={<Login />} />
						<Route path='/registration' element={<Registration />} />
					</Route>
					<Route path='/products' element={<ProductsPage />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
