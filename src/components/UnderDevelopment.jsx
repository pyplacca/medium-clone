import React, { useContext } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Pressable, Text } from 'react-native';
import { AppContext } from '../context';
import { theme } from '../config';


export default function UnderDevelopment({onBack, style={}}) {
	const { darkMode } = useContext(AppContext).state;
	const { foreground } = theme[darkMode ? 'dark' : 'light'].colors;
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				...style
			}}
		>
			<Entypo name="tools" size={25} color={foreground.primary} />
			<Text
				style={{
					color: foreground.primary,
					textAlign: 'center',
					marginTop: 10
				}}
			>
				<Text>This screen is currently under development.{'\n'}</Text>
				<Text>Kindly check back in a few days.</Text>
			</Text>
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
				{
					onBack ?
					<Text
						style={{
							color: foreground.primary,
							textDecorationLine: 'underline'
						}}
					>
						Back
					</Text>
					: null
				}
			</Pressable>
		</View>
	)
}
