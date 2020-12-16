import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


function ScreenPlaceholder ({text, onRefresh}) {
	return (
		<View style={styles.placeholder}>
			<Text style={styles.title}>
				{`Couldn't load your ${text}`}
			</Text>
			<Text style={styles.subtitle}>
				Make sure you're connected to the internet and try again
			</Text>
			<Pressable style={styles.btn}>
				<Text style={styles.btnText}>Refresh</Text>
			</Pressable>
		</View>
	)
};

const styles = StyleSheet.create({
	placeholder: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	title: {
		// fontFamily: ,
		fontSize: 20,
	},

	subtitle: {
		marginVertical: 15,
		// color: ,
	},

	btn: {
		paddingVertical: 15,
		paddingHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'center',
		// borderColor: '',
		borderRadius: 9,
		borderWidth: 1,
	},

	btnText: {
		// color: ,
		// fontFamily: '',
	}
});

export default ScreenPlaceholder;
