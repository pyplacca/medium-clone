import React, { useLayoutEffect, useContext } from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { SimpleHeader } from '../../../components/headers';
import { SettingsContext } from '../../../context/appSettings';
import { theme, measure } from '../../../config';


const Gap = () => <View style={styles.gap}/>

function Settings ({navigation, route}) {

	const { settings: {darkMode}, settingsDispatch } = useContext(SettingsContext);
	const { foreground: fg, background: bg } = theme[darkMode ? 'dark' : 'light'].colors

	function RowItem ({text, style, textStyle, children, ...props}) {
		return (
			<Pressable
				{...props}
				android_ripple={{
					color: theme.dark.colors.foreground.secondary
				}}
				style={[
					styles.row,
					{ backgroundColor: bg.primary },
					style
				]}
			>
				{
					text ?
					<Text style={[{color: fg.primary}, textStyle]}>
						{text}
					</Text>
					: null
				}
				{ children }
			</Pressable>
		)
	}

	const sds = {
		emphasis: { color: fg.tetiary },
		text: { color: fg.primary },
		lead: {
			color: fg.secondary,
			paddingHorizontal: measure.s + 2,
			marginBottom: measure.s,
		}
	}

	const toggleDarkMode = () => {
		settingsDispatch({
			type: 'DARK_MODE',
			payload: !darkMode
		})
		navigation.navigate('dark_mode')
	}

	return (
		<View style={{ backgroundColor: bg.secondary}}>
			<ScrollView>
				<SimpleHeader title='Settings'/>
				<Gap/>
				<RowItem
					text='Become a member'
					textStyle={sds.emphasis}
				/>
				<Gap/>

				{/* Configure Medium */}
				<Text style={sds.lead}>Configure Medium</Text>
				<RowItem text='Customize your interests' />
				<RowItem onPress={toggleDarkMode}>
					<Text style={sds.text}>Dark Mode</Text>
					<Text style={sds.emphasis}>{darkMode ? 'On' : 'Off'}</Text>
				</RowItem>
				<RowItem text='Push Notifications' />
				<RowItem text='Email Notifications' />

				<Gap/>
				<RowItem text='Stats'/>
				<Gap/>

				<RowItem text='Account' />
				<RowItem>
					<Text style={sds.text}>Toggle Medium Beta</Text>
				</RowItem>
				<Gap/>

				{/* Social */}
				<Text style={sds.lead}>Social</Text>
				<RowItem text='Join our community' />
				<RowItem>
					<View>
						<Text style={sds.text}>Twitter</Text>
					</View>
					<Text style={sds.emphasis}>Connect</Text>
				</RowItem>
				<RowItem>
					<View>
						<Text style={sds.text}>Facebook</Text>
					</View>
					<Text style={sds.emphasis}>Connect</Text>
				</RowItem>
				<Gap/>

				{/* About Medium */}
				<Text style={sds.lead}>About Medium</Text>
				<RowItem text='Help'/>
				<RowItem text='Terms of service'/>
				<RowItem text='Privacy Policy'/>
				<Gap/>

				{/* App Control */}
				<Text style={sds.lead}>App Control</Text>
				<RowItem>
					<Text style={sds.text}>Disabled image loading</Text>
				</RowItem>
				<RowItem>
					<Text style={sds.text}>Limit background data usage to wifi only</Text>
				</RowItem>
				<Gap/>
				<RowItem text='Sign out' style={{marginBottom: 0}}/>
			</ScrollView>
		</View>
	)
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: measure.s + 2,
		marginBottom: 1
	},

	gap: {
		height: measure.s + measure.xs + 2
	},
});

export default Settings;
