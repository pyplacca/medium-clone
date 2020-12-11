import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { measure, theme } from '../../config';


function StackHeader ({accent='dark', title, style, navigation, ...props}) {
	const { background: bg, foreground: fg } = theme[accent].colors
	return (
		<View
			styles={[
				styles.frame,
				{ backgroundColor: bg.primary },
				style
			]}
			{...props}
		>
			<Pressable
				onPress={() => navigation.goBack()}
				android_ripple={{
					color: theme.dark.colors.background.secondary
				}}
			>
				<Ionicons
					name="md-arrow-back"
					size={24}
					color={fg.primary}
				/>
			</Pressable>
			<Text
				style={[
					styles.title,
					{ color: fg.primary },
				]}
			>
				{title}
			</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	title: {
		marginLeft: measure.s * 2,
	},

	// icon: {
	// 	// width: 15,
	// 	// resizeMode: 'contain',
	// 	height: 15,
	// },

});

export default StackHeader;
