import React, { useContext } from 'react';
import { View, Pressable, Text } from 'react-native';
import { AppContext } from '../context';
import { theme, measure } from '../config';


function ButtonRow ({text, style, textStyle, children, ...props}) {

	const { darkMode } = useContext(AppContext).state;
	const { colors } = theme[darkMode ? 'dark' : 'light'];

	return (
		<Pressable
			{...props}
			android_ripple={{ color: theme.dark.colors.foreground.secondary }}
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: measure.s + 2,
				marginBottom: 1,
				backgroundColor: colors.background.primary,
				...style
			}}
		>
			{
				text ?
				<Text
					style={{
						color: colors.foreground.primary,
						...textStyle
					}}
				>
					{text}
				</Text>
				: null
			}
			{ children }
		</Pressable>
	)
};

export default ButtonRow;
