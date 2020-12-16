import React, { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { AppContext } from '../context';


const icons = {
	dark: {
		home: {
			outlined: require('../../assets/icons/home-dark-outlined.png'),
			filled: require('../../assets/icons/home-dark-filled.png')
		},
		activity: {
			outlined: require('../../assets/icons/activity-dark-outlined.png'),
			filled: require('../../assets/icons/activity-dark-filled.png')
		},
	},
	light: {
		home: {
			outlined: require('../../assets/icons/home-light-outlined.png'),
			filled: require('../../assets/icons/home-light-filled.png')
		},
		activity: {
			outlined: require('../../assets/icons/activity-light-outlined.png'),
			filled: require('../../assets/icons/activity-light-filled.png')
		},
	},
};


function Icon ({name, size=30, accent, type, style={}}) {
	// accent: dark or light (mode)
	// type: filled or outlined
	const { state: {darkMode} } = useContext(AppContext);

	return (
		<Image
			source={icons[darkMode ? 'dark' : 'light'][name][type]}
			style={{
				height: size,
				...style,
				resizeMode: 'contain'
			}}
		/>
	)
};

export default Icon;
