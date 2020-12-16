import React from 'react';
import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { UnderDevelopment } from '../../components'


export default function Search ({navigation}) {
	return (
		<ScrollView
			contentContainerStyle={{
				flex: 1
			}}
		>
			<UnderDevelopment onBack={() => navigation.goBack()}/>
		</ScrollView>
	)
}
