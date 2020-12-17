import React, { useContext } from 'react';
import { TopTabNavigator } from '../../components/navigators';
import { Saved, Archived, Highlighted, RecentlyViewed } from './reading-list';
import { AppContext } from '../../context';
import { theme, themeMode } from '../../config';


function ReadingListNavigator ({navigation, route}) {
	const { state } = useContext(AppContext);
	return (
		<TopTabNavigator
			accent={themeMode[state.darkMode]}
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
