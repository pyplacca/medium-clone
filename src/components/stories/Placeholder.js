import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text } from '#/components';


function Placeholder ({text, style, textStyle}) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				...style
			}}
		>
			<Text
				style={{
					textAlign: 'center',
					...textStyle
				}}
			>
				{text}
			</Text>
		</View>
	)
};

export default Placeholder;
