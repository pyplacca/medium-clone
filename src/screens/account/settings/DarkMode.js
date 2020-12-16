import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../../../context';
import { theme } from '../../../config';


function DarkMode () {
	const {state, dispatch} = useContext(AppContext);
	const { colors } = theme[settings.darkMode ? 'dark' : 'light']

	const textStyle = {
		color: colors.foreground.primary
	}

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text
				style={textStyle}
			>
				Dark Mode setting
			</Text>
			<View>
				<Text style={textStyle}>On</Text>
				<View
					accessibilityRole='radio'
					// accessibilityState='checked'
					style={{
						borderColor: colors.background.tetiary,
						width: 20,
						height: 20,
						borderWidth: 2,
						backgroundColor: 'white'
					}}
				/>
			</View>
		</View>
	)
};

export default DarkMode;
