const { statSync } = require('fs')
require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
	API_KEY:process.env.API_KEY,
	SHOP_APP_URL: process.env.SHOP_APP_URL,
	APP_NAME: process.env.APP_NAME,
	APP_NAME_NORMALIZED: process.env.APP_NAME_NORMALIZED
  },
  images: {
	remotePatterns: [
		{
			protocol: "http",
			hostname: "localhost",
			port: "5047",
			pathname: "remote/images/**" 
		}
	]
  }
}

module.exports = nextConfig
