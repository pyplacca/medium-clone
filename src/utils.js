import { useContext } from 'react';
import { SettingsContext } from './context/appSettings';

const {settingsState: state} = useContext(SettingsContext)

console.log(state);

export const theme = {
	colors: {
		// primary:
		// secondary:
		// bgPrimary
		// textPrimary:
		// textSecondary:
	}
};
