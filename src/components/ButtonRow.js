import React, { useContext } from 'react';
import { View, Pressable } from 'react-native';
import Text from '#/components/Text';
import { AppContext } from '#/context';
import { theme, measure, themeMode } from '#/config';


function ButtonRow ({text, style, textStyle, children, ...props}) {

	const { darkMode } = useContext(AppContext).state;
	const { colors } = theme[themeMode[darkMode]];

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
				<Text style={textStyle}>
					{text}
				</Text>
				: null
			}
			{ children }
		</Pressable>
	)
};

export default ButtonRow;
