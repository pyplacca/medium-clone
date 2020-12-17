import React, { useContext } from 'react';
import { AppContext } from '../context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { theme, themeMode } from '../config';


function Navigation ({children}) {
	const { state } = useContext(AppContext);
	const { colors } = theme[themeMode[state.darkMode]]

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
