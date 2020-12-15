import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext } from './context';
import { Navigation, Icon, UserIcon } from './components';
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

	const { state: {darkMode} } = useContext(AppContext);
	const { background: bg, foreground: fg } = theme[darkMode ? 'dark' : 'light'].colors;


	return (
		<Navigation>
			<Tab.Navigator
				// sceneContainerStyle={{backgroundColor: bg.primary}}
				tabBarOptions={{
					showLabel: false,
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
					},
					// activeTintColor: fg.tetiary,
					// inActiveTintColor: fg.primary,
				}}
				screenOptions={{ tabBarButton }}
			>
				<Tab.Screen
					name="home"
					component={HomeNavigator}
					options={{
						tabBarAccessibilityLabel: 'Home',
						tabBarIcon: params => getIcon({name: 'home', ...params}),
					}}
				/>
				<Tab.Screen
					name="activity"
					component={Activity}
					options={{
						tabBarAccessibilityLabel: 'Activity',
						tabBarIcon: ({focused}) => (
							<MaterialCommunityIcons
								name={focused ? 'bell' : 'bell-outline'}
								size={30}
								color={focused ? fg.primary : fg.secondary}
							/>
						)
					}}
				/>
				<Tab.Screen
					name="account"
					component={AccountNavigator}
					options={{
						tabBarAccessibilityLabel: 'Account',
						tabBarLabel: 'Account',
						tabBarIcon: params => (
							<UserIcon bordered={params.focused}/>
						)
					}}
				/>
			</Tab.Navigator>
		</Navigation>
	)
};

export default AppNavigator;
