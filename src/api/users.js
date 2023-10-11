import axios from 'axios'
axios.defaults.baseURL = 'https://dummyjson.com/'

export const getUsers = async () => {
	const { data } = await axios('users')
	return data
}
