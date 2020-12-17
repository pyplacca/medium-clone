import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Gap, ButtonRow, RadioButton } from '../../../components';
import { StackHeader } from '../../../components/headers';
import { AppContext } from '../../../context';
import { theme, themeMode } from '../../../config';


function Beta ({navigation}) {

	const { state, dispatch: dispatch } = useContext(AppContext);
	const { colors } = theme[themeMode[state.darkMode]];

	const toggleBeta = type => {
		dispatch({
			type: 'BETA',
			payload: type
		})
	}

	return (
		<View
			style={{
				backgroundColor: colors.background.secondary,
				flex: 1
			}}
		>
			<StackHeader title='Beta' centerTitle navigation={navigation}/>
			<Gap/>
			<ButtonRow onPress={() => toggleBeta('beta')}>
				<Text style={{color: colors.foreground.primary}}>
					Medium Beta
				</Text>
				<RadioButton
					color={colors.foreground.secondary}
					checked={state.beta === 'beta'}
				/>
			</ButtonRow>
			<ButtonRow onPress={() => toggleBeta('classic')}>
				<Text style={{color: colors.foreground.primary}}>
					Medium Classic
				</Text>
				<RadioButton
					color={colors.foreground.secondary}
					checked={state.beta === 'classic'}
				/>
			</ButtonRow>
			<Gap/>
			<ButtonRow text='Send us feedback on the beta'/>
		</View>
	)
};

export default Beta;
