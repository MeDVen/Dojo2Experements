export default [
	{
		path: 'home',
		outlet: 'home',
		defaultRoute: true
		// onEnter: () => console.log('Wow, its a Home page')
	},
	{
		path: 'about',
		outlet: 'about'
	},
	{
		path: 'profile',
		outlet: 'profile'
	},
	{
		path: 'coolPage',
		outlet: 'coolPage',
		children: [
			{
				path: 'spaceStuff',
				outlet: 'spaceStuff'
				// defaultRoute: true //! it's not working correct
				// onEnter: () => console.log('Wow, its a Space Stuff page')
			},
			{
				path: 'greatWolf',
				outlet: 'greatWolf'
				// onEnter: () => console.log('Wow, its a Great Wolf page')
			}
		]
	}
];
