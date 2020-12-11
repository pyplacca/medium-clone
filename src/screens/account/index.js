import React, { useState, useContext } from 'react';
import {
	ScrollView,
	View,
	Text,
	Image,
	Pressable,
	RefreshControl,
	StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleHeader } from '../../components/headers';
import { theme, measure } from '../../config';
// import SettingsContext from '../../context/appSettings';


function Account (props) {
	const {navigate} =  props.navigation;

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true)
		setTimeout(() => setRefreshing(false), 2000)
	}


	return (
		<ScrollView
			refreshControl={
				<RefreshControl {...{refreshing, onRefresh}}/>
			}
		>
			<SimpleHeader style={styles.header}>
				<Pressable
					style={styles.icon}
					onPress={() => navigate('stories')}
				>
					<Ionicons name="md-podium" size={24} color="black" />
				</Pressable>
				<Pressable
					style={styles.icon}
					onPress={() => navigate('settings')}
				>
					<Ionicons name="ios-settings" size={24} color="black" />
				</Pressable>
			</SimpleHeader>
			<Text>Account Screen</Text>
		</ScrollView>
	)
};

const styles = StyleSheet.create({
	header: {
		justifyContent: 'flex-end',
		flexDirection: 'row',
		paddingHorizontal: measure.s + measure.xs,
	},
	icon: {
		marginHorizontal: measure.xs * 2
	}
})

export default Account;
