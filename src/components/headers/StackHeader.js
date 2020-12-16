import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { measure, theme } from '../../config';


function StackHeader ({
	accent='dark',
	title,
	style={},
	centerTitle=false,
	navigation,
	icons,
	showBorder,
	...props
}) {
	const { background: bg, foreground: fg } = theme[accent].colors
	return (
		<View
			style={[
				styles.frame,
				{
					backgroundColor: bg.primary,
					borderBottomWidth: showBorder ? 1 : 0,
					borderBottomColor: bg.secondary,
				},
				style
			]}
			{...props}
		>
			<Pressable
				onPress={() => navigation.goBack()}
				android_ripple={{
					color: theme.dark.colors.foreground.secondary,
					borderless: true,
					radius: 20
				}}
			>
				<Ionicons name="md-arrow-back" size={icz} color={fg.primary}/>
			</Pressable>
			<Text
				style={[
					styles.title,
					{
						color: fg.primary,
						textAlign: centerTitle ? 'center' : 'left',
						marginRight: centerTitle ? measure.s * 2 + icz : 0,
					},
				]}
			>
				{title}
			</Text>
			{icons}
		</View>
	)
};

const icz = 22;

const styles = StyleSheet.create({
	frame: {
		padding: measure.s + 2,
		flexDirection: 'row',
	},

	title: {
		flex: 1,
		fontSize: 16,
		marginLeft: measure.s * 2,
		fontWeight: 'bold',
	},

	// icon: {
	// 	// width: 15,
	// 	// resizeMode: 'contain',
	// 	height: 15,
	// },
});

export default StackHeader;
