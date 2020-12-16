import React, { useContext } from 'react';
import { View, Text } from 'react-native';


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
