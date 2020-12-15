import React, { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { StackNavigator } from '../components/navigators';
import Account, { SettingsNavigator, StoriesNavigator } from './account';
import { horizontalCardStyle } from '../config';
import { StackHeader } from '../components/headers'

export default function AccountNavigator (props) {
	// hide tab bar when user navigates to screens specified in "screenHidesTabBar"
	useLayoutEffect(() => {
		const screenHidesTabBar = ['settings', 'stories'];
		const routeName = getFocusedRouteNameFromRoute(props.route)
		let tabBarVisible = true

		if (screenHidesTabBar.includes(routeName)) {
			tabBarVisible = false
		}
		props.navigation.setOptions({tabBarVisible})
	}, [props.navigation, props.route])

	return (
		<StackNavigator
			screenOptions={{
				// headerShown: false,
			}}
			screens={[
				{
					name: 'account',
					component: Account,
					options: {
						headerShown: false
					}
				},
				{
					name: 'stories',
					component: StoriesNavigator,
					options: {
						...horizontalCardStyle,
						gestureEnabled: false,
						header: props => <StackHeader title='Stories' {...props}/>
					}
				},
				{
					name: 'settings',
					component: SettingsNavigator,
					options: {
						// mode: 'modal',
						...horizontalCardStyle,
						headerShown: false
					}
				},
			]}
		/>
	)
};
