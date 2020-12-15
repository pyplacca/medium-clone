import React, { useContext } from 'react';
import { SimpleHeader } from '../components/headers';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { AppContext } from '../context';
import { measure, theme } from '../config';


function Activity () {
	const { state: {darkMode}, dispatch } = useContext(AppContext);
	const { background: bg, foreground: fg } = theme[darkMode ? 'dark' : 'light'].colors;
	const textStyle = {
		color: fg.primary,
		textAlign: 'center',
	}

	return (
		<View>
			<ScrollView>
				<SimpleHeader title='Activity'/>
				<View
					style={[
						styles.placeholder,
						{backgroundColor: bg.secondary}
					]}
				>
					<Text style={[styles.title, textStyle]}>
						Stay up to date
					</Text>
					<Text style={[styles.subtitle, textStyle]}>
						See updates from the people you follow and interact with your stories
					</Text>
				</View>
			</ScrollView>
		</View>
	)
};

const styles = StyleSheet.create({
	placeholder: {
		margin: measure.s + measure.xs,
		paddingHorizontal: measure.s * 2,
		paddingVertical: measure.m,
		alignItems: 'center',
		justifyContent: 'center',
	},

	title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: measure.xs
	},

	subtitle: {
		lineHeight: 25
	}
});

export default Activity;
