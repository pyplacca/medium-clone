import React from 'react';
import { Screen } from '../../../components/stories';
import { UnderDevelopment } from '../../../components';


function RecentlyViewed () {
	return (
		<Screen
			placeholderText="You haven't viewed any stories yet"
		>
			<UnderDevelopment/>
		</Screen>
	)
};

export default RecentlyViewed;
