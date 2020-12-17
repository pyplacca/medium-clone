import {
	CardStyleInterpolators,
	TransitionPresets
} from '@react-navigation/stack';

export const themeMode = {
	true: 'dark',
	false: 'light'
};

export const theme = {
	dark: {
		colors: {
			background: {
				primary: '#000',
				secondary: '#292929',
			},
			foreground: {
				tetiary: '#4a9b56',
				primary: '#fafafa',
				secondary: '#9d9d9d',
			}
		}
	},

	light: {
		colors: {
			background: {
				secondary: '#f2f2f2',
				primary: '#fff',
			},
			foreground: {
				primary: '#292929',
				secondary: '#6f6f6f',
				tetiary: '#258122',
			}
		}
	}
};

export const measure = {
	xs: 5,
	s: 15,
	m: 40,
	l: 70,
	xl: 100,
};

export const screenModalOptions = {
	cardStyle: {
		backgroundColor: 'transparent',
	},
	cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};

export const horizontalCardStyle = {
	gestureEnabled: true,
	gestureDirection: 'horizontal',
	gestureResponseDistance: {
		horizontal: 250
	},
	cardStyle: {
		shadowColor: '#000',
		shadowOpacity: .3,
		shadowRadius: 7,
		shadowOffset: {
      width: -3,
      height: 0,
    },
    elevation: 5,
	},
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
