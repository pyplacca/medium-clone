import React from 'react';
import { StackNavigator } from '../components'
import ReadingList from './home/ReadingList';
import Search from './home/Search';
import Home from './home';


const screens = [
	{
		name: 'home',
		component: Home,
		// options: {}
	},
	{
		name: 'reading_list',
		component: ReadingList,
		// options: {}
	},
	{
		name: 'search',
		component: Search,
		// options: {}
	},
]

export default function HomeNavigator () {
	return (
		<StackNavigator
			screenOptions={{headerShown: false}}
			screens={screens}
		/>
	)
};
