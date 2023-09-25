import axios from 'axios'
axios.defaults.baseURL = 'https://dummyjson.com/'

export const getProductsBySearch = async (query) => {
	const { data } = await axios(`products/search?q=${query}`)
	return data
}

export const getSingleProduct = async (id) => {
	const { data } = await axios(`products/${id}`)
	return data
}
