import React, { useContext } from 'react';
import { SimpleHeader } from '../components/headers';
import { View, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Text, NotConnected } from '#/components';
import { AppContext } from '../context';
import { measure, theme, themeMode, font } from '../config';


function Activity () {
	const { state: {darkMode, connection} } = useContext(AppContext);
	const { background: bg } = theme[themeMode[darkMode]].colors;

	return (
		<View>
			<ScrollView>
				<SimpleHeader title='Activity'/>
				{
					!connection.isConnected ? (
						<NotConnected
							text='your recent activity'
							isDarkMode={darkMode}
						/>
					) : (
						<View
							style={[
								styles.placeholder,
								{backgroundColor: bg.secondary}
							]}
						>
							<Text style={styles.title}>
								Stay up to date
							</Text>
							<Text style={styles.subtitle}>
								See updates from the people you follow and interact with your stories
							</Text>
						</View>
					)
				}
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
		...font.title,
		marginBottom: measure.xs,
		textAlign: 'center',
	},

	subtitle: {
		lineHeight: 25,
		textAlign: 'center',
	}
});

export default Activity;
