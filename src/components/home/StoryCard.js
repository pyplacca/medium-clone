import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { Creator, Text } from '../';
import { theme, measure } from '#/config';


const direction = {
	vertical: 'column',
	horizontal: 'row'
}

function StoryCard (props) {
	const {
		colorMode='light',
		orientation='horizontal',
		onPress=()=>{},
		story,
		creator,
		creatorStyle={},
		starred,
		marker,
		showCover,
		style={}
	} = props;
	const { foreground, background } = theme[colorMode].colors;

	const sds = {
		text: {
			color: foreground.primary
		},
		textFade: {
			color: foreground.secondary
		},
	}

	return (
		<Pressable
			style={{
				width: orientation === 'vertical' ? size : '100%',
				...style
			}}
		>
			{
				orientation === 'vertical' && showCover ?
				<Image
					style={{
						...styles.storyImageLarge,
						borderColor: foreground.primary,
						marginBottom: measure.xs
					}}
				/>
				: null
			}
			<View style={{flexDirection: 'row'}}>
				{
					marker ?
					<Text
						style={[
							styles.marker,
							sds.textFade
						]}
					>
						{marker}
					</Text>
					: null
				}
				<View style={{flex: 1}}>
					<Creator {...creator} colorMode={colorMode} style={creatorStyle}/>
					<View
						style={{
							flexDirection: 'row',
							marginTop: measure.xs
						}}
					>
						<View style={{flex: 1}}>
							<Text
								style={[
									sds.text,
									styles.storyTitle,
								]}
							>
								{story.title}
							</Text>
							<Text style={[sds.textFade, styles.footText]}>
								{`${story.date}  •  ${story.ert} min read`}
							</Text>
						</View>
						{
							orientation === 'horizontal' && showCover ?
							<Image
								source={story.cover}
								style={{
									...styles.storyImage,
									borderColor: foreground.primary
								}}
							/>
							: null
						}
					</View>
				</View>
			</View>
		</Pressable>
	)
};

const size = 200;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: size,
		padding: measure.s,
	},

	marker: {
		fontSize: 28,
		marginRight: measure.s + 3,
		textAlignVertical: 'top',
		fontWeight: 'bold',
		opacity: .3,
		transform: [
			{ translateY: -measure.xs - 3}
		],
	},

	storyTitle: {
		fontWeight: 'bold',
		fontSize: 17,
		marginBottom: measure.xs
	},

	storyImage: {
		width: 90,
		marginLeft: measure.s + measure.xs,
		height: 60,
		borderWidth: 1,
	},

	storyImageLarge: {
		width: size,
		height: size - Math.floor(size / 5),
		borderWidth: 1,
	},

	footText: {
		fontSize: 12
	},

	row: {
		flexDirection: 'row',
		alignItems: 'center',
	}
});

export default StoryCard;
