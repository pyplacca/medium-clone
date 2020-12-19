import React, { useContext } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Pressable } from 'react-native';
import Text from '#/components/Text';
import { AppContext } from '#/context';
import { theme, themeMode } from '#/config';


export default function UnderDevelopment({onBack, style={}}) {
	const { darkMode } = useContext(AppContext).state;
	const { foreground } = theme[themeMode[darkMode]].colors;
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				padding: 50,
				...style
			}}
		>
			<Entypo name="tools" size={25} color={foreground.primary} />
			<Text
				style={{
					textAlign: 'center',
					marginTop: 10
				}}
			>
				This screen is currently under development.
				{'\n'}
				Kindly check back in a few days.
			</Text>
			{
				onBack ?
				<Pressable
					onPress={onBack}
					style={{
						marginTop: 25
					}}
					android_ripple={{
						color: foreground.secondary,
						borderless: true,
						radius: 20
					}}
				>
					<Text style={{ textDecorationLine: 'underline' }}>
						Back
					</Text>
				</Pressable>
				: null
			}
		</View>
	)
}
