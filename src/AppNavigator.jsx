import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsContext } from './context/appSettings';
import { Navigation } from './components';
import { HomeNavigator, Activity, AccountNavigator } from './screens';
import { measure, theme } from './config';


function tabBarButton (props) {
	return (
		<Pressable
			{...props}
			android_ripple={{
				color: theme.dark.colors.foreground.secondary
			}}
		/>
	)
};

function getIcon (props) {
	return (
		<Icon
			name={props.name}
			type={props.focused ? 'filled' : 'outlined'}
		/>
	)
};

const Tab = createBottomTabNavigator();

function AppNavigator (props) {

	const { settings: {darkMode} } = useContext(SettingsContext);
	const { background: bg, foreground: fg } = theme[darkMode ? 'dark' : 'light'].colors;


	return (
		<Navigation>
			<Tab.Navigator
				sceneContainerStyle={{backgroundColor: bg.primary}}
				tabBarOptions={{
					// showLabel: false,
					// labelPosition: "beside-icon",
					style: {
						backgroundColor: bg.primary,
						borderTopColor: bg.secondary,
						borderTopWidth: !darkMode ? 1 : 0,
						alignItems: 'center',
						paddingHorizontal: measure.s * 2
					},
					tabStyle: {
						justifyContent: 'center',
					},
					labelStyle: {
						fontSize: 14,
						// color: fg.primary
					},
					activeTintColor: fg.tetiary,
					inActiveTintColor: fg.primary,
					// activeBackgroundColor: bg.secondary
					tabBarButton
				}}
			>
				<Tab.Screen
					name="home"
					component={HomeNavigator}
					options={{
						tabBarLabel: 'Home',
						// tabBarAccessibilityLabel: 'Home',
						// tabBarButton
						tabBarIcon: params => getIcon({name: 'home', ...params})
					}}
				/>
				<Tab.Screen
					name="activity"
					component={Activity}
					options={{
						tabBarLabel: 'Activity',
						// tabBarAccessibilityLabel: 'Activity',
						// tabBarButton
						tabBarIcon: params => getIcon({name: 'activity', ...params})
					}}
				/>
				<Tab.Screen
					name="account"
					component={AccountNavigator}
					options={{
						// tabBarAccessibilityLabel: 'Account',
						tabBarLabel: 'Account',
						// tabBarButton
					}}
				/>
			</Tab.Navigator>
		</Navigation>
	)
};

export default AppNavigator;
