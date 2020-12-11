import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from '../../components';
import { screenModalOptions } from '../../config';
import Settings from './settings';
import DarkMode from './settings/DarkMode';



const screens = [
	{
		name: 'settings',
		component: Settings,
		// options: {}
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
