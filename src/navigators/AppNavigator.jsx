import React from 'react';
// import { useFonts } from '@use-expo/font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabsNavigation } from '@react-navigation/material-bottom-tabs';
import { HomeNavigator } from './';


const BottomTabs = createBottomTabsNavigation()
const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
	}
}

function AppNavigator () {
	const [loaded] = useFonts({

	});

	return !loaded ? null : (
		<NavigationContainer {...{theme}}>
			<BottomTabs.Navigator>
				<BottomTabs.Screen name="home" component={HomeNavigator}/>
			</BottomTabs.Navigator>
		</NavigationContainer>
	)
};

export default AppNavigator;
