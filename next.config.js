const { statSync } = require('fs')
require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
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
