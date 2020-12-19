import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { Text } from 'components';
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
				onPress={navigation.goBack}
				android_ripple={{
					color: theme.dark.colors.foreground.secondary,
					borderless: true,
					radius: 20
				}}
			>
				<Ionicons name="md-arrow-back" size={icz} color={fg.primary}/>
			</Pressable>
			<Text
				style={{
					flex: 1,
					marginLeft: measure.s * 2,
					color: fg.primary,
					textAlign: centerTitle ? 'center' : 'left',
					marginRight: centerTitle ? measure.s * 2 + icz : 0,
				}}
				type='title'
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
		alignItems: 'center'
	},

	// icon: {
	// 	// width: 15,
	// 	// resizeMode: 'contain',
	// 	height: 15,
	// },
});

export default StackHeader;
