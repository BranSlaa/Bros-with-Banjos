require(`dotenv`).config({
	path: `.env`,
});

module.exports = {
	siteMetadata: {
		title: `Bros with Banjos Website`,
		description: `A Website built for the Bros with Banjos World of Warcraft guild`,
		author: `Brandon Slaa`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				// Learn about environment variables: https://gatsby.dev/env-vars
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#020202`,
				theme_color: `#9b51e0`,
				display: `minimal-ui`,
				icon: `src/assets/images/bros_with_banjos.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`roboto\:400,500,700,800`, // you can also specify font weights and styles
				],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// Footnotes mode (default: true)
				footnotes: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
