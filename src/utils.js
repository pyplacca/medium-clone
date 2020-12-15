export function greetings () {
	const hours = new Date().getUTCHours();
	if (hours >= 0 && hours < 12) {
		return 'Morning'
	} else if (hours >= 12 && hours < 17) {
		return 'Afternoon'
	} else {
		return 'Evening'
	}
};
