import React from 'react';
import { Screen } from '../../../components/stories';
import { UnderDevelopment } from '../../../components';


function Highlighted () {
	return (
		<Screen
			placeholderText="You haven't highlighted any stories yet"
		>
			<UnderDevelopment/>
		</Screen>
	)
};

export default Highlighted;
