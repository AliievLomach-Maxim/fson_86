import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const Context = ({ children }) => {
	const [showContext, setShowContext] = useState(false)
	const setShowContextFn = () => {
		setShowContext((prev) => !prev)
	}
	return (
		<GlobalContext.Provider value={{ setShowContextFn, showContext }}>
			{children}
		</GlobalContext.Provider>
	)
}

export default Context
