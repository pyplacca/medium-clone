import React from 'react';
import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { measure } from '../config';


export function Gap () {
	return (
		<View
			style={{
				height: measure.s + measure.xs + 2
			}}
		/>
	)
};

export function CheckBox ({size=20, checked, onCheck, checkColor='white', style={}}) {
	return (
		<Pressable
			style={{
				width: size,
				height: size,
				borderWidth: checked ? 0 : 2.5,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 2,
				...style,
				backgroundColor: !checked ? 'transparent' : style.backgroundColor
			}}
			onPress={onCheck}
		>
			{
				checked ?
				<Ionicons
					name="md-checkmark"
					size={15}
					color={checkColor}
				/>
				: null
			}
		</Pressable>
	)
};

export function RadioButton ({color, size=20, checked=false, onCheck}) {
	return (
		<Pressable
			onPress={onCheck}
			style={{
				borderColor: color,
				borderWidth: 2.5,
				borderRadius: size,
				width: size,
				height: size,
				padding: 2,
			}}
		>
			<View
				style={{
					flex: 1,
					borderRadius: size,
					backgroundColor: checked ? color : 'transparent',
				}}
			/>
		</Pressable>
	)
};
