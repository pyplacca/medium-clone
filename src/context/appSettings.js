import React, { createContext, useReducer } from 'react';


const initialState = {
	darkMode: false,
	wifiOnlyBackgroundDataUsage: true,
	imageLoadingDisabled: false,
	connectedToTwitter: false,
	connectedToFacebook: false,
	beta: null, // other values: 'beta' or 'classic'
};

function settingsReducer (state, action) {
	const { type, payload } = action;

	switch (type) {

		case 'DARK_MODE':
			return {
				...state,
				darkMode: payload
			};

		case 'BETA':
			return {
				...state,
				beta: payload,
			}
	};
};

export const SettingsContext = createContext();

export default function SettingsProvider (props) {
	const [settings, settingsDispatch] = useReducer(settingsReducer, initialState);

	return (
		<SettingsContext.Provider
			value={{
				settings,
				settingsDispatch
			}}
		>
			{props.children}
		</SettingsContext.Provider>
	)
};
