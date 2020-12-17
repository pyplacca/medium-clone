import React, { useLayoutEffect, useContext } from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { SimpleHeader } from '../../../components/headers';
import { ButtonRow, Gap, CheckBox } from '../../../components';
import { AppContext } from '../../../context';
import { theme, measure, themeMode } from '../../../config';
// screens
import DarkMode from './DarkMode';
import Beta from './Beta';


function Settings ({navigation, route}) {

	const { state, dispatch } = useContext(AppContext);
	const { foreground: fg, background: bg } = theme[themeMode[state.darkMode]].colors

	const sds = {
		emphasis: { color: fg.tetiary },
		text: { color: fg.primary },
		lead: {
			color: fg.secondary,
			paddingHorizontal: measure.s + 2,
			marginBottom: measure.s,
		},
		checkbox: {
			borderColor: fg.secondary,
			backgroundColor: fg.tetiary,
		}
	}

	// const toggleDarkMode = () => {
	// 	dispatch({
	// 		type: 'DARK_MODE',
	// 		payload: !darkMode
	// 	})
	// 	// navigation.navigate('dark_mode')
	// }

	const sendDispatch = (type, payload) => {
		dispatch({type, payload})
	}

	const goTo = screen => {
		navigation.navigate(screen)
	}

	return (
		<View style={{ backgroundColor: bg.secondary}}>
			<ScrollView>
				<SimpleHeader title='Settings'/>
				<Gap/>
				<ButtonRow
					text='Become a member'
					textStyle={sds.emphasis}
				/>
				<Gap/>

				{/* Configure Medium */}
				<Text style={sds.lead}>Configure Medium</Text>
				<ButtonRow text='Customize your interests' />
				<ButtonRow onPress={() => sendDispatch('DARK_MODE', !state.darkMode)}>
					<Text style={sds.text}>Dark Mode</Text>
					<Text style={sds.emphasis}>{state.darkMode ? 'On' : 'Off'}</Text>
				</ButtonRow>
				<ButtonRow text='Push Notifications' />
				<ButtonRow text='Email Notifications' />

				<Gap/>
				<ButtonRow text='Stats'/>
				<Gap/>

				<ButtonRow text='Account' />
				<ButtonRow onPress={() => goTo('beta')}>
					<Text style={sds.text}>Toggle Medium Beta</Text>
					<MaterialIcons name="chevron-right" size={20} color={fg.secondary} />
				</ButtonRow>
				<Gap/>

				{/* Social */}
				<Text style={sds.lead}>Social</Text>
				<ButtonRow text='Join our community' />
				<ButtonRow>
					<View>
						<Text style={sds.text}>Twitter</Text>
					</View>
					<Text style={sds.emphasis}>Connect</Text>
				</ButtonRow>
				<ButtonRow>
					<View>
						<Text style={sds.text}>Facebook</Text>
					</View>
					<Text style={sds.emphasis}>Connect</Text>
				</ButtonRow>
				<Gap/>

				{/* About Medium */}
				<Text style={sds.lead}>About Medium</Text>
				<ButtonRow text='Help'/>
				<ButtonRow text='Terms of service'/>
				<ButtonRow text='Privacy Policy'/>
				<Gap/>

				{/* App Control */}
				<Text style={sds.lead}>App Control</Text>
				<ButtonRow
					onPress={() => sendDispatch(
						'IMAGE_LOADING',
						!state.imageLoadingDisabled
					)}
				>
					<Text style={sds.text}>Disabled image loading</Text>
					<CheckBox
						style={sds.checkbox}
						checkColor={bg.primary}
						checked={state.imageLoadingDisabled}
					/>
				</ButtonRow>
				<ButtonRow
					onPress={() => sendDispatch(
						'BACKGROUND_DATA_USAGE',
						!state.wifiOnlyBackgroundDataUsage
					)}
				>
					<Text style={sds.text}>Limit background data usage to wifi only</Text>
					<CheckBox
						style={sds.checkbox}
						checkColor={bg.primary}
						checked={state.wifiOnlyBackgroundDataUsage}
					/>
				</ButtonRow>
				<Gap/>
				<ButtonRow text='Sign out' style={{marginBottom: 0}}/>
			</ScrollView>
		</View>
	)
};

const styles = StyleSheet.create({
});

export default Settings;
export {
	DarkMode,
	Beta
};
