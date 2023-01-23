const { statSync } = require('fs')
require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
	API_KEY:"",
	SHOP_APP_URL: "http://localhost:5047"
  }
}

module.exports = nextConfig
