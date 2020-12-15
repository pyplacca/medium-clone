import React from 'react';
import { TopTabNavigator } from '../../components/navigators';
import { Drafts, Public, Unlisted } from './stories';


function StoriesNavigator ({navigation}) {
	return (
		<TopTabNavigator
			screens={[
				{ name: 'drafts', component: Drafts },
				{ name: 'public', component: Public },
				{ name: 'unlisted', component: Unlisted },
			]}
		/>
	)
};

export default StoriesNavigator;
