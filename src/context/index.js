import React, { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';


export const AppContext = createContext();

export default function AppProvider (props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider
			value={{ state, dispatch }}
		>
			{props.children}
		</AppContext.Provider>
	)
};
