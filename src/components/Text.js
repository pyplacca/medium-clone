import React, { useContext } from 'react';
import { Text as NativeText } from 'react-native';
import { theme, themeMode, font } from 'config';
import { AppContext } from '#/context';


function Text ({type='body', children, style, ...props}) {
	const { state } = useContext(AppContext);
	const { colors } = theme[themeMode[state.darkMode]];

	return (
		<NativeText
			style={[
				font[type],
				{color: colors.foreground.primary},
				style
			]}
			{...props}
		>
			{children}
		</NativeText>
	)
};

export default Text;
