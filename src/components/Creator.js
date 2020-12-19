import React from 'react';
import { ScrollView, Pressable, Image } from 'react-native';
import Text from '#/components/Text';
import { theme, measure } from '../config';


function Creator ({colorMode, style={}, size='small', isSuggestion=true, ...details}) {
	const { foreground } = theme[colorMode].colors;
	return (
		<Pressable
			style={{
				flexDirection: size === 'small' ? 'row' : 'column',
				aligItems: 'center',
				...style
			}}
		>
			<Image
				// source={details.image}
				style={{
					width: style.width || 20,
					height: style.width || 20,
					marginRight: measure.xs * 2,
					borderWidth: 1,
					borderColor: foreground.primary,
				}}
			/>
			<Text
				style={{
					color: foreground.primary,
					textAlignVertical: 'center' ,
					marginTop: size !== 'small' ? measure.xs : 0,
					fontWeight: 'bold',
					fontSize: 14
				}}
			>
				{details.name}
			</Text>
			{
				size !== 'small' ? [
					<Text
						key={1}
						numberOfLines={3}
						style={{
							color: foreground.secondary,
							marginVertical: measure.xs
						}}
					>
						{details.bio}
					</Text>,
					isSuggestion ?
					<Pressable
						key={2}
						style={{
							borderColor: foreground.primary,
							alignItems: 'center',
							justifyContent: 'center',
							padding: measure.xs + 3,
							marginTop: measure.xs,
							borderWidth: 1,
							borderRadius: measure.xs
						}}
					>
						<Text style={{color: foreground.primary}}>Follow</Text>
					</Pressable>
					: null
				] : null
			}
		</Pressable>
	)
};

export default Creator;
