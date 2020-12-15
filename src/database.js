export const latestFromFollowing = [
];

export const whoToFollow = [
];

export const stories = [
	{
		title: 'Data Measurement Levels',
		story: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quae sapiente asperiores natus soluta voluptates corporis deleniti dolore. Nihil porro quasi consequatur sit ipsum, hic eveniet, debitis sed? Autem, accusantium voluptates odio excepturi quae libero molestias totam! Ex quasi beatae, eaque enim minus id veritatis, nisi iure nemo aliquam error!",
		creator: 'tds', // id
		// featured, trending, maker, daily-read, our-read,
		tags: [
			'featured', 'daily-read'
		],
		claps: 0,
		comments: 0,
		themeColor: '',
		cover: undefined,
		date: '22 Oct',
		ert: 7, // estimated read time
		id: 'tds-dml'
	},
	{
		title: '10 things I stole from great developers',
		story: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quae sapiente asperiores natus soluta voluptates corporis deleniti dolore. Nihil porro quasi consequatur sit ipsum, hic eveniet, debitis sed? Autem, accusantium voluptates odio excepturi quae libero molestias totam! Ex quasi beatae, eaque enim minus id veritatis, nisi iure nemo aliquam error!",
		creator: 'stp', // id
		// featured, trending, maker, daily-read, our-read,
		tags: [
			'daily-read', 'our-read', 'trending'
		],
		claps: 0,
		comments: 0,
		themeColor: '',
		cover: undefined,
		date: '29 Sep',
		ert: 5, // estimated read time
		id: 'stp-10'
	},
	{
		title: 'Was an Iranian Scientist Really Assassinated With an A.I weapon?',
		story: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quae sapiente asperiores natus soluta voluptates corporis deleniti dolore. Nihil porro quasi consequatur sit ipsum, hic eveniet, debitis sed? Autem, accusantium voluptates odio excepturi quae libero molestias totam! Ex quasi beatae, eaque enim minus id veritatis, nisi iure nemo aliquam error!",
		creator: 'oz', // id
		// featured, trending, maker, daily-read, our-read,
		tags: [
			'our-read', 'trending'
		],
		claps: 0,
		comments: 0,
		themeColor: '',
		cover: undefined,
		date: '3 days ago',
		ert: 5, // estimated read time
		id: 'oz-1'
	},
];

export const creators = {
	tds: {
		name: 'Towards Data Science',
		bio: 'blanditiis accusamus amet accusantium enim debitis ratione quasi eaque odio sequi',
		stories: ['tds-dml'],
		followers: 0,
		following: 0,
		image: undefined,
	},
	stp: {
		name: 'The Startup',
		bio: 'blanditiis accusamus amet accusantium enim debitis ratione quasi eaque odio sequi',
		stories: ['stp-10'],
		followers: 0,
		following: 0,
		image: undefined,
	},
	oz: {
		name: 'OneZero',
		bio: 'blanditiis accusamus amet accusantium enim debitis ratione quasi eaque odio sequi',
		stories: ['oz-1'],
		followers: 0,
		following: 0,
		image: undefined,
	}
}
