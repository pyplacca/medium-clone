import React from 'react';
import { View, Pressable } from 'react-native';
import Text from '#/components/Text';
import { theme, themeMode, measure } from '#/config';


function NotConnected ({text, onRefresh=()=>{}, isDarkMode=false}) {
	const { foreground, background } = theme[themeMode[isDarkMode]].colors;
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				padding: measure.m,
				backgroundColor: background.primary
			}}
		>
			<Text
				type='title'
				style={{ fontSize: 20 }}
			>
				Couldn't load {text}
			</Text>
			<Text
				style={{
					marginVertical: measure.s,
					textAlign: 'center',
					paddingHorizontal: measure.m,
					color: foreground.secondary,
				}}
			>
				Make sure you're connected to the internet and try again
			</Text>
			<Pressable
				onPress={onRefresh}
				android_ripple={{
					color: '#d2d2d2',
					radius: 60
				}}
				style={{
					paddingVertical: measure.s,
					paddingHorizontal: measure.l,
					alignItems: 'center',
					justifyContent: 'center',
					borderColor: foreground.tetiary,
					borderRadius: 5,
					borderWidth: 1,
				}}
			>
				<Text
					type='title'
					style={{
						color: foreground.tetiary,
						fontSize: 13,
					}}
				>
					Refresh
				</Text>
			</Pressable>
		</View>
	)
};

export default NotConnected;
