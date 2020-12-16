import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from '../../components/navigators';
import { screenModalOptions, horizontalCardStyle } from '../../config';
import Settings, { DarkMode, Beta } from './settings';



const screens = [
	{
		name: 'settings',
		component: Settings,
		// options: {}
	},
	{
		name: 'beta',
		component: Beta,
		options: {
			...horizontalCardStyle
		}
	},
	// {
	// 	name: 'dark_mode',
	// 	component: DarkMode,
	// 	options: {
	// 		...screenModalOptions
	// 	},
	// 	mode: 'modal'
	// }
	// {
	// 	name: 'interest',
	// 	component: InterestsNavigator,
	// 	// options: {}
	// },
]


function SettingsNavigator (props) {
	return (
		<StackNavigator
			screenOptions={{
				headerShown: false,
				cardOverlayEnabled: true,
			}}
			// mode='modal'
			screens={screens}
		/>
	)
};

export default SettingsNavigator;
