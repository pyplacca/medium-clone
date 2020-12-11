import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';
import SettingsContext from '../context/appSettings';


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


function Icon ({name, size, accent, type, style}) {
	// accent: dark or light (mode)
	// type: filled or outlined
	console.log([accent, name, type].join('-') + '.png');

	const { settings: {darkMode} } = useContext(appSettings);

	return (
		<Image
			source={icons[darkMode ? 'dark' : 'light'][name][type]}
			style={{ height: size, ...style }}
		/>
	)
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.number,
	// accent: PropTypes.string,
	type: PropTypes.string.isRequired,
	style: PropTypes.object,
};

Icon.defaultProps = {
	size: 25,
	// accent: 'light',
	style: {}
};

export default Icon;
