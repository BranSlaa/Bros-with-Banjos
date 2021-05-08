const path = require('path');
const slugify = require('slugify');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const bossKillPost = path.resolve('./src/templates/boss-kill-post.js');
		resolve(
			graphql(
				`
					{
						allContentfulBossKills {
							nodes {
								slug
								bossName
								difficulty
								killDate(formatString: "MMM, DD YYYY")
								bossNumber
								raid {
									numberOfBosses
									raidName
								}
								teamPicture {
									file {
										url
										fileName
									}
									gatsbyImageData(placeholder: BLURRED)
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}
				const posts = result.data.allContentfulBossKills.nodes;
				let x = 0;
				posts
					.sort(function (date1, date2) {
						return (
							new Date(date2.killDate) - new Date(date1.killDate)
						);
					})
					.forEach(post => {
						const path = `/boss-kills/${post.slug}`;
						const next = posts[x + 1];
						const prev = posts[x - 1];
						createPage({
							path: path,
							component: bossKillPost,
							context: {
								slug: post.slug,
								next: next,
								prev: prev,
							},
						});
						x++;
					});
			})
		);
	});
};
