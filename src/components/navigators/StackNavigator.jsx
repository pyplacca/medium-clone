import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function StackNavigator ({screens, ...props}) {
	return (
		<Stack.Navigator {...props}>
			{
				screens.map(options => (
					<Stack.Screen
						{...options}
						key={options.name}
					/>
				))
			}
		</Stack.Navigator>
	)
}

export default StackNavigator;
