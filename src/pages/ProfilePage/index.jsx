import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { profileSelector } from '../../store/auth/selector'
import { useEffect } from 'react'
import { updateProfileThunk } from '../../store/auth/thunks'
import toast from 'react-hot-toast'
import { Button } from '@mui/material'

const ProfilePage = () => {
	const dispatch = useDispatch()
	const profile = useSelector(profileSelector)

	const { register, handleSubmit, setValue } = useForm()

	useEffect(() => {
		if (profile) {
			setValue('firstName', profile.firstName)
			setValue('lastName', profile.lastName)
		}
	}, [profile, setValue])

	return (
		<div className='card p-5 mx-auto mt-5' style={{ width: 500 }}>
			<form
				onSubmit={handleSubmit((data) =>
					dispatch(updateProfileThunk({ body: data, id: profile._id }))
						.unwrap()
						.then(() => toast.success('Profile update successfully'))
				)}
			>
				<div className='mb-3'>
					<label htmlFor='exampleInputFirstName' className='form-label'>
						First name
					</label>
					<input
						type='text'
						className='form-control'
						id='exampleInputFirstName'
						{...register('firstName')}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputSecondName' className='form-label'>
						Last name
					</label>
					<input
						type='text'
						className='form-control'
						id='exampleInputSecondName'
						{...register('lastName')}
					/>
				</div>
				<Button variant='outlined' type='submit'>
					Update
				</Button>

				{/* <button type='submit' className='btn btn-primary'>
					Update
				</button> */}
			</form>
		</div>
	)
}

export default ProfilePage
