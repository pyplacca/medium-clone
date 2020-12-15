import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { theme, measure } from '../../config';


const Tab = createMaterialTopTabNavigator()

function TopTabNavigator ({tabBarOptions={}, screens, accent='dark', showBorder, ...props}) {
	const { foreground: fg, background: bg } = theme[accent].colors;

	return (
		<Tab.Navigator
			tabBarOptions={{
				style: {
					backgroundColor: bg.primary,
					justifyContent: 'flex-start',
					elevation: 0,
					borderBottomWidth: showBorder ? 1 : 0,
					borderBottomColor: bg.secondary
				},
				indicatorStyle: {
					backgroundColor: fg.primary,
				},
				labelStyle: {
					fontSize: 12,
					textTransform: 'capitalize',
					fontWeight: 'bold',
				},
				tabStyle: {
					paddingHorizontal: measure.s,
					width: 'auto',
				},
				inactiveTintColor: fg.secondary,
				activeTintColor: fg.primary,
				...tabBarOptions
			}}
			{...props}
		>
			{
				screens.map(options => (
					<Tab.Screen
						{...options}
						key={options.name}
					/>
				))
			}
		</Tab.Navigator>
	)
};

export default TopTabNavigator;
