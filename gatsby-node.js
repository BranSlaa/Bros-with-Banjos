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
				posts.forEach(post => {
					const args = { lower: true };
					const path = `/boss-kills/${post.slug}`;
					createPage({
						path: path,
						component: bossKillPost,
						context: {
							slug: post.slug,
						},
					});
				});
			})
		);
	});
};
