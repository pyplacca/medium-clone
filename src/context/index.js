import React, { createContext, useReducer } from 'react';


const initialState = {
	user: {
		firstName: 'David',
		lastName: 'Placca',
		followers: [], // array of follower ids
		following: [ // array of creator ids
			1, 2
		],
		stories: {
			drafts: [],
			public: [],
			unlisted: [],
		},
	},
	darkMode: false,
	wifiOnlyBackgroundDataUsage: true,
	imageLoadingDisabled: false,
	connectedToTwitter: false,
	connectedToFacebook: false,
	beta: null, // other values: 'beta' or 'classic'
	// settings: {
	// },
};

function reducer (state, action) {
	const { type, payload } = action;

	switch (type) {

		case 'DARK_MODE':
			// state.darkMode = payload
			return { ...state, darkMode: payload }

		case 'BETA':
			return { ...state, beta: payload }

		case 'IMAGE_LOADING':
			return { ...state, imageLoadingDisabled: payload }

		case 'BACKGROUND_DATA_USAGE':
			return {
				...state,
				wifiOnlyBackgroundDataUsage: payload
			}

		case 'UPDATE_USER':
			// payload for this case must be an object
			return {
				...state,
				user: {
					...state.user,
					...payload
				}
			}

		case 'FOLLOW_CREATOR':
			return {
				...state,
				user: {
					...state.user,
					following: state.user.following + 1
				}
			}

		default:
			return state
	};
};

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
