import React, { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import StackNavigator from '../components/StackNavigator'
import Account from './account';
import StoriesNavigator from './account/StoriesNavigator';
import SettingsNavigator from './account/SettingsNavigator';


const horizontalCardStyle = {
	gestureEnabled: true,
	gestureDirection: 'horizontal',
	gestureResponseDistance: {
		horizontal: 250
	},
	cardStyle: {
		// shadowColor: '#000',
		// shadowOpacity: 1,
		shadowRadius: 7,
		// shadowOffset: {
  //     width: -3,
  //     height: 0,
  //   },
    elevation: 5,
	},
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const screens = [
	{
		name: 'account',
		component: Account,
		// options: {}
	},
	{
		name: 'stories',
		component: StoriesNavigator,
		// options: {}
			...horizontalCardStyle
	},
	{
		name: 'settings',
		component: SettingsNavigator,
		options: {
			// mode: 'modal',
			...horizontalCardStyle
		}
	},
]

export default function AccountNavigator (props) {

	// hide tab bar when user navigates to screens specified in "screenHidesTabBar"
	useLayoutEffect(() => {
		const screenHidesTabBar = ['settings', 'stories'];
		const routeName = getFocusedRouteNameFromRoute(props.route)
		let tabBarVisible = true

		if (screenHidesTabBar.includes(routeName)) {
			tabBarVisible = false
		}
		console.log({'Navigation options -> ': props.navigation.options})
		props.navigation.setOptions({tabBarVisible})
	}, [props.navigation, props.route])

	return (
		<StackNavigator
			screenOptions={{
				headerShown: false,
			}}
			screens={screens}
		/>
	)
};
