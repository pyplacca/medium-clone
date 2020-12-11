import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SettingsContext } from '../../context/appSettings';
import { measure, theme } from '../../config';


function SimpleHeader ({title, style, children, ...props}) {

	const { settings } = useContext(SettingsContext);
	const { background: bg, foreground: fg } = theme[settings.darkMode ? 'dark' : 'light'].colors;

	return (
		<View
			style={[
				styles.frame,
				{
					backgroundColor: bg.primary,
					borderBottomColor: bg.secondary,
				},
				style
			]}
			{...props}
		>
			{
				title ?
				<Text
					style={[
						styles.title,
						{color: fg.primary}
					]}
				>
					{title}
				</Text>
				: null
			}
			{children}
		</View>
	)
};

const styles = StyleSheet.create({
	frame: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: measure.s + 2,
		borderBottomWidth: 1,
	},

	title: {
		fontSize: 17,
		fontWeight: 'bold'
	}
});

export default SimpleHeader;
