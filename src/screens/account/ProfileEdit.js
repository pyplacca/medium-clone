import React, { useState, useContext } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UnderDevelopment } from 'components';
import { measure, theme, themeMode } from 'config';
import { AppContext } from 'context';


function ProfileEdit({navigation}) {
	const { state, dispatch } = useContext(AppContext);
	const { foreground, background } = theme[themeMode[state.darkMode]].colors;

	const [edit, setEdit] = useState(state.user);
	console.log(edit)

	const saveChanges = () => {
		dispatch({type: 'UPDATE_USER', edit})
		// navigation.goBack()
	};

	const applyChange = (field, value) => {
		edit[field] = value
		setEdit(edit)
	};

	return (
		<ScrollView
			contentContainerStyle={{
				flex: 1
			}}
		>
			<View
				style={{
					padding: measure.s,
					backgroundColor: background.secondary,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Pressable
					onPress={navigation.goBack}
					android_ripple={{
						color: '#d2d2d2',
						borderless: true,
					}}
				>
					<Ionicons name='md-close' size={25} color={foreground.secondary}/>
				</Pressable>
				<Pressable
					onPress={saveChanges}
					android_ripple={{
						color: '#d2d2d2',
						borderless: true,
						radius: 50,
					}}
				>
					<Text
						style={{
							color: foreground.tetiary,
							fontSize: 17,
							fontWeight: 'bold'
						}}
					>
						Save
					</Text>
				</Pressable>
			</View>
			<UnderDevelopment
				onBack={navigation.goBack}
			/>
		</ScrollView>
	)
};

export default ProfileEdit;
