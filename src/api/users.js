import axios from 'axios'
axios.defaults.baseURL = 'https://practices-api.vercel.app/'

export const getUsers = async () => {
	const { data } = await axios('users')
	return data
}
