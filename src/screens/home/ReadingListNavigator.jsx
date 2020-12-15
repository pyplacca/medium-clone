import React, { useContext } from 'react';
import { TopTabNavigator } from '../../components/navigators';
import { Saved, Archived, Highlighted, RecentlyViewed } from './reading-list';
import { AppContext } from '../../context';
import { theme } from '../../config';


function ReadingListNavigator ({navigation, route}) {
	const { state } = useContext(AppContext);
	const accent = state.darkMode ? 'dark' : 'light'
	return (
		<TopTabNavigator
			accent={accent}
			showBorder
			screens={[
				{ name: 'saved', component: Saved },
				{ name: 'archived', component: Archived },
				{
					name: 'recently_viewed',
					component: RecentlyViewed,
					options: {
						tabBarLabel: 'Recently Viewed'
					}
				},
				{ name: 'highlighted', component: Highlighted },
			]}
		/>
	)
};

export default ReadingListNavigator;
