export const initialState = {
	user: {
		firstName: 'David',
		lastName: 'Placca',
		// avi:
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
	connection: {},
};

export default function reducer (state, action) {
	const { type, payload } = action;

	switch (type) {

		case 'DARK_MODE':
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

		case 'NETWORK':
			return {...state, connection: payload}

		default:
			return state
	};
};
