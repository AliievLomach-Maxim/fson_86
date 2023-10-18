import { useEffect } from 'react'
import { selectorUsers } from '../../store/users/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersThunk } from '../../store/users/slice'
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'

const UsersPage = () => {
	const dispatch = useDispatch()
	const { users } = useSelector(selectorUsers)

	useEffect(() => {
		!users && dispatch(getUsersThunk())
	}, [dispatch, users])

	return (
		<>
			{users && (
				<Grid container spacing={4} justifyContent='center'>
					{users.map((user) => (
						<Grid item key={user._id}>
							<Card sx={{ maxWidth: 345 }}>
								<CardHeader
									avatar={
										<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
											{user.firstName?.at(0)?.toUpperCase()}
											{user.lastName?.at(0)?.toUpperCase()}
										</Avatar>
									}
									title={user.firstName}
									subheader={user.email}
								/>
								<CardContent>
									<Typography variant='body2' color='text.secondary'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Dolor ullam vel sequi ex tempora adipisci reprehenderit
										provident debitis eligendi velit voluptas repellat,
										voluptatum vitae culpa praesentium illum quaerat, quod
										nobis.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			)}
		</>
	)
}

export default UsersPage
