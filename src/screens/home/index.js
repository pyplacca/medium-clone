import React, { useContext } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { SimpleHeader } from '../../components/headers';
import { SettingsContext } from '../../context/appSettings';
import { measure, theme } from '../../config';


function greetings () {
	const hours = new Date().getUTCHours();
	if (hours >= 0 && hours < 12) {
		return 'Morning'
	} else if (hours >= 12 && hours < 17) {
		return 'Afternoon'
	} else {
		return 'Evening'
	}
}

function Home (props) {
	const {settings: {darkMode}} = useContext(SettingsContext);
	const { colors } = theme[darkMode ? 'dark' : 'light'];
	// console.log('Home -> ', props)
	return (
		<View>
			<ScrollView>
				<SimpleHeader
					style={{
						justifyContent: 'space-between',
						paddingHorizontal: measure.s + measure.xs,
						borderBottomWidth: 0
					}}
				>
					<View>
						<Text
							style={{
								color: colors.foreground.primary,
								fontWeight: 'bold'
							}}
						>
							{`Good ${greetings()}`}
						</Text>
					</View>
				</SimpleHeader>
			</ScrollView>
		</View>
	)
}

export default Home;
