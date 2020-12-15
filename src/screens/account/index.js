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
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { UserIcon } from '../../components';
import { SimpleHeader } from '../../components/headers';
import { theme, measure } from '../../config';
import { AppContext } from '../../context';


// const nFormat = n => Intl.NumberFormat().format(n)

function Account (props) {
	const {navigate} =  props.navigation;
	const { user, darkMode } = useContext(AppContext).state;
	const { foreground, background } = theme[darkMode ? 'dark' : 'light'].colors;
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
			contentContainerStyle={styles.container}
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
								// onPress={() => navigate('edit-profile')}
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
								width: '53%',
								marginTop: 64 + measure.s
							}}
						>
							<Text style={sds.textShade}>
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
								...styles.storyText,
								...sds.text,
								fontWeight: 'bold',
								fontSize: 17
							}}
						>
							Write your first story
						</Text>
						<Text style={[styles.storyText, sds.textShade]}>
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

	storyText: {
		// lineHeight: 25,
		marginVertical: measure.xs
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
export {default as SettingsNavigator} from './SettingsNavigator';
export {default as StoriesNavigator} from './StoriesNavigator';
