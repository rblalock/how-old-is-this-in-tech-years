/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
	env: {
		SITE_URL: process.env.SITE_URL || (process.env.NODE_ENV !== 'production' && !process.env.SITE_URL) ? 'http://localhost:3000' : undefined || 'https://www.intechyears.com',
	},
});
