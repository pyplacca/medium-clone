import React, { useContext } from 'react';
import { AppContext } from '../context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { theme } from '../config';


function Navigation ({children}) {
	const { state } = useContext(AppContext);
	const { colors } = theme[state.darkMode ? 'dark' : 'light']

	const appTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: colors.background.primary
		}
	}

	return (
		<NavigationContainer theme={appTheme}>
			{children}
		</NavigationContainer>
	)
}

export default Navigation
