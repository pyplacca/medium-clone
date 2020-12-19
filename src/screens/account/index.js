import React, { useState, useContext } from 'react';
import {
	ScrollView,
	View,
	Image,
	Pressable,
	RefreshControl,
	StyleSheet
} from 'react-native';
import { Text } from '#/components';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { UserIcon, NotConnected } from '#/components';
import { SimpleHeader } from '#/components/headers';
import { theme, measure, themeMode } from '#/config';
import { AppContext } from '#/context';


// const nFormat = n => Intl.NumberFormat().format(n)

function Account (props) {
	const {navigate} =  props.navigation;
	const { user, darkMode, connection } = useContext(AppContext).state;
	const { foreground, background } = theme[themeMode[darkMode]].colors;
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true)
		setTimeout(() => setRefreshing(false), 2000)
	}

	const sds = {
		textShade: {
			color: foreground.secondary
		},
		text: {
			color: foreground.primary
		}
	}


	return (
		<ScrollView
			refreshControl={
				<RefreshControl {...{refreshing, onRefresh}}/>
			}
			contentContainerStyle={{
				backgroundColor: background.secondary,
				flex: 1
			}}
		>
			<SimpleHeader style={styles.header}>
				<Pressable
					style={styles.icon}
					onPress={() => navigate('stories')}
				>
					<Ionicons name="ios-list" size={25} color={foreground.secondary} />
				</Pressable>
				<Pressable
					style={styles.icon}
					onPress={() => navigate('settings')}
				>
					<EvilIcons name="gear" size={25} color={foreground.secondary} />
				</Pressable>
			</SimpleHeader>
			{
				!connection.isConnected ? (
					<NotConnected text='your stories' isDarkMode={darkMode}/>
				) : (
					<View
						style={{
							flex: 1,
							backgroundColor: background.primary
						}}
					>
						<View style={{...styles.innerContainer, borderBottomColor: background.secondary}}>
							<View style={styles.leadRow}>
								{/* profile image */}
								<UserIcon size={90} />
								<View
									style={{
										flex: 1,
										justifyContent: 'space-between',
										marginLeft: measure.s
									}}
								>
									<View style={styles.justRow}>
										<Text
											style={{
												color: foreground.primary,
												...styles.username
											}}
										>
											{[user.firstName, user.lastName].join(' ')}
										</Text>
										{/* edit text button */}
										<Pressable
											onPress={() => navigate('profile-edit')}
										>
											<Text
												style={{
													color: foreground.tetiary,
													fontSize: 15,
												}}
											>
												Edit
											</Text>
										</Pressable>
									</View>
									{/* community reach */}
									<View
										style={{
											...styles.justRow,
											justifyContent: 'flex-start',
											width: '53%',
											marginTop: 64 + measure.s
										}}
									>
										<Text
											style={[
												sds.textShade,
												{marginRight: measure.xs + 3}
											]}
										>
											{`${user.following.length} Following`}
										</Text>
										<Text style={sds.textShade}>
											{`${user.followers.length} Followers`}
										</Text>
									</View>
								</View>
							</View>
							{/* first story placeholder */}
						</View>
						<View style={styles.mainRow}>
							{
								!user.stories.public.length
								?
								<View style={{...styles.firstStory, backgroundColor: background.secondary}}>
									<Text
										style={{
											...sds.text,
											fontWeight: 'bold',
											fontSize: 17
										}}
									>
										Write your first story
									</Text>
									<Text
										style={{
											...sds.textShade,
											marginVertical: measure.xs * 2
										}}
									>
										We'd love to hear what you're thinking
									</Text>
									<Pressable
										style={{
											...styles.firstStoryBtn,
											backgroundColor: foreground.tetiary
										}}
										android_ripple={{
											color: theme.dark.colors.background.secondary,
										}}
									>
										<Text style={{color: '#fff', fontWeight: 'bold'}}>
											Start your first story
										</Text>
									</Pressable>
								</View>
								:
								null
							}
						</View>
					</View>
				)
			}
		</ScrollView>
	)
};

const styles = StyleSheet.create({
	innerContainer: {
		padding: measure.s + measure.xs,
		borderBottomWidth: 4
	},

	header: {
		justifyContent: 'flex-end',
		flexDirection: 'row',
		paddingHorizontal: measure.s + measure.xs,
	},

	leadRow: {
		flexDirection: 'row',
	},

	justRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
		// marginLeft: measure.s,
	},

	username: {
		fontWeight: 'bold',
		fontSize: 18,
	},

	mainRow: {
		padding: measure.s + measure.xs + 2,
	},

	firstStory: {
		paddingVertical: measure.s * 2,
		alignItems: 'center',
		justifyContent: 'center',
	},

	firstStoryBtn: {
		padding: measure.s,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
		marginVertical: measure.xs
	},

	icon: {
		marginHorizontal: measure.xs * 2
	}
})

export default Account;
export { default as SettingsNavigator } from './SettingsNavigator';
export { default as StoriesNavigator } from './StoriesNavigator';
export { default as ProfileEdit } from './ProfileEdit';
