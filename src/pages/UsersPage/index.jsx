import { useEffect } from 'react'
import { selectorUsers } from '../../store/users/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersThunk } from '../../store/users/slice'

const UsersPage = () => {
	const dispatch = useDispatch()
	const { users } = useSelector(selectorUsers)

	useEffect(() => {
		!users && dispatch(getUsersThunk())
	}, [dispatch, users])

	return (
		<>
			{users &&
				users.map((user) => (
					<div className='card m-5'>
						<h3>{user.firstName}</h3>
						<h3>{user.lastName}</h3>
						<h3>{user.email}</h3>
					</div>
				))}
		</>
	)
}

export default UsersPage
