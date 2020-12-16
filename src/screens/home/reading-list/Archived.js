import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../../../components/stories';
import { UnderDevelopment } from '../../../components';


function Archived () {
	return (
		<Screen
			placeholderText="You haven't archived any stories yet"
		>
			{/*<Text>Archived</Text>*/}
			<UnderDevelopment/>
		</Screen>
	)
};

export default Archived;
