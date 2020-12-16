import React from 'react';
import { Text } from 'react-native';
import { Screen } from '../../../components/stories';
import { UnderDevelopment } from '../../../components';


function Saved () {
	return (
		<Screen
			placeholderText="You haven't saved any stories yet"
		>
			{/*<Text>Saved</Text>*/}
			<UnderDevelopment/>
		</Screen>
	)
};

export default Saved;
