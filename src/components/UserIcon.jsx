import React from 'react';
import { View, Image } from 'react-native';
// import user from '../../assets/images/user.jpg';


function UserIcon ({size=30, bordered=false}) {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderColor: '#000',
				borderWidth: bordered ? 2 : 0,
				borderRadius: size,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Image
				source={require('../../assets/images/user.jpg')}
				style={{
					borderRadius: size,
					width: bordered ? size - 5 : size,
					height: bordered ? size - 5 : size,
					resizeMode: 'cover',
				}}
			/>
		</View>
	)
};

export default UserIcon;
