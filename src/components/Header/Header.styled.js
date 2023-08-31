import { styled } from 'styled-components'

export const TypographyHeader = styled('h1')(({ isOnline }) => {
	return {
		color: isOnline ? 'black' : 'red',
		textAlign: isOnline ? 'center' : 'right',
		// '& .class':{
		//     '&&&'
		// }
	}
})

// export const NewTypographyHeader = styled(TypographyHeader)({

// })

export const TypographyText = styled('p')(({ isOnline }) => {
	return {
		color: isOnline ? 'black' : 'red',
		textAlign: isOnline ? 'center' : 'right',
	}
})

// const TypographyHeader = styled.h1`
// 	/* color: #00fbff; */
// 	margin: 0;
// 	color: ${({ isOnline }) => (isOnline ? '#00fbff' : 'black')};
// `
// const color = '#000'
// const TypographyHeader = styled('h1')({
// 	boxShadow: ({ isOnline }) =>
// 		`0 0 12px 12px ${isOnline ? color : '#00fbff'}`,
// })
