import React, { useState, useContext } from 'react';
import { FlatList, ScrollView, Text, RefreshControl } from 'react-native';
import Placeholder from './Placeholder.jsx';
import { AppContext } from '../../context';
import { theme, measure } from '../../config';


function Screen ({
	onScreenRefresh=()=>{},
	placeholderText,
	style={},
	placeholderStyle={},
	children
}) {
	const { darkMode } = useContext(AppContext).state;
	const { colors } = theme[darkMode ? 'dark' : 'light'];

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true)
		onScreenRefresh()
		setTimeout(() => setRefreshing(false), 2000)
	}

	return (
		<ScrollView
			refreshControl={
				<RefreshControl {...{refreshing, onRefresh}}/>
			}
			contentContainerStyle={{flex: 1, ...style}}
		>
			{
				!children
				?
				<Placeholder
					text={placeholderText}
					textStyle={{
						color: colors.foreground.secondary
					}}
					style={{
						backgroundColor: colors.background.secondary,
						...placeholderStyle
					}}
				/>
				:
				children
			}
		</ScrollView>
	)
};

export default Screen;
