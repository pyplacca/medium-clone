import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Creator, Text } from '../'
import { theme, measure, font } from '../../config';


function Featured ({story, creator, colorMode, onPress=()=>{}, style={}}) {
	const { foreground } = theme[colorMode].colors;
	return (
		<View
			style={{
				paddingHorizontal: measure.s * 2 - 10,
				paddingBottom: measure.s + measure.xs,
				...style
			}}
		>
			<Image
				// source={story.image}
				style={{
					width: '100%',
					height: 220,
					borderWidth: 1,
					borderColor: foreground.primary
				}}
			/>
			<Creator
				{...creator}
				colorMode={colorMode}
				style={{marginVertical: measure.s}}
			/>
			<Text
				style={{
					color: foreground.primary,
					fontSize: 22,
					...font.title
				}}
			>
				{story.title}
			</Text>
			<Text
				numberOfLines={4}
				style={{
					color: foreground.primary,
					lineHeight: 27,
					marginVertical: measure.xs
				}}
			>
				{story.story}
			</Text>
			<Pressable
				style={{
					flexDirection: 'row',
					alignItems: 'center'
				}}
				onPress={onPress}
			>
				<Text
					style={{
						color: foreground.primary,
						marginTop: measure.xs,
						fontSize: 12,
					}}
				>
					{`Read more  •  ${story.ert} min read`}
				</Text>
			</Pressable>
		</View>
	)
};

export default Featured
