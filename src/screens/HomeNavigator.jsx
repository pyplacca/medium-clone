import React, { useContext, useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { StackNavigator } from '../components/navigators';
import { StackHeader } from '../components/headers';
import Home, { ReadingListNavigator, Search } from './home';
import { horizontalCardStyle } from '../config';
import { AppContext } from '../context';


function HomeNavigator ({navigation, route}) {
	useLayoutEffect(() => {
		const screenHidesTabBar = ['reading_list', 'search'],
		routeName = getFocusedRouteNameFromRoute(route);
		let tabBarVisible = true
		if (screenHidesTabBar.includes(routeName)) {
			tabBarVisible = false
		}
		navigation.setOptions({tabBarVisible})
	}, [navigation, route])

	const { state } = useContext(AppContext);

	return (
		<StackNavigator
			screens={[
				{
					name: 'home',
					component: Home,
					options: {
						headerShown: false
					}
				},
				{
					name: 'reading_list',
					component: ReadingListNavigator,
					options: {
						...horizontalCardStyle,
						gestureEnabled: false,
						header: props => (
							<StackHeader
								title='Reading List'
								centerTitle
								showBorder
								accent={state.darkMode ? 'dark' : 'light'}
								{...props}
							/>
						)
					}
				},
				{
					name: 'search',
					component: Search,
					options: {
						headerShown: false
					}
				},
			]}
		/>
	)
};

export default HomeNavigator;
