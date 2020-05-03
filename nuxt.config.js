module.exports = {
	head: {
		title: 'shop',
		lang: 'ru',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			}
		]
	},
	loading: { color: '#3B8070' },
	css: [
		'~node_modules/normalize.css/normalize.css',
		'@/assets/fonts/fonts.css',
		'@/assets/css/style.scss',
	],
	plugins: [
		{
			src: '~plugins/vue-carousel',
			ssr: false
		}
	],
	build: {
		vendor: ['axios'],
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
