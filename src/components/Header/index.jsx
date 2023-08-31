import { TypographyHeader, TypographyText } from './Header.styled'

const Header = () => {
	const isOnline = false
	return (
		<div>
			<TypographyHeader $isOnline={isOnline}>
				Hello React
			</TypographyHeader>
			<TypographyText>qwrety</TypographyText>
		</div>
	)
}

export default Header
