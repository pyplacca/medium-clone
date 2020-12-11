import React, { useContext } from 'react';
import { SettingsContext } from '../context/appSettings';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { theme } from '../config';


function Navigation ({children}) {
	const { settings } = useContext(SettingsContext);
	const { colors } = theme[settings.darkMode ? 'dark' : 'light']

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
