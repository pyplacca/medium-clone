import React, { createContext, useReducer } from 'react';


const initialState = {
	darkMode: false,
};

function settingsReducer (state, action) {
	const { type, payload } = action;

	switch (type) {

		case 'DARK_MODE_ON':
			console.log({dark_mode: payload});
			return {
				...state,
				darkMode: payload
			};
	};
};

export const SettingsContext = createContext();

export default function SettingsProvider (props) {
	const [settingsState, settingsDispatch] = useReducer(settingsReducer, initialState);

	return (
		<SettingsContext.Provider
			value={{
				settingsState,
				settingsDispatch
			}}
		>
			{props.children}
		</SettingsContext.Provider>
	)
};
