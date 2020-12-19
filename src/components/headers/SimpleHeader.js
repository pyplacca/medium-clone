import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text } from '#/components';
import { AppContext } from '#/context';
import { measure, theme, themeMode } from '#/config';


function SimpleHeader ({title, style, children, ...props}) {

	const { darkMode } = useContext(AppContext).state;
	const { background } = theme[themeMode[darkMode]].colors;

	return (
		<View
			style={[
				{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					paddingVertical: measure.s + 2,
					backgroundColor: background.primary,
					borderBottomWidth: 1,
					borderBottomColor: background.secondary,
				},
				style
			]}
			{...props}
		>
			{
				title ?
				<Text type='title'>{title}</Text>
				: null
			}
			{children}
		</View>
	)
};

export default SimpleHeader;
