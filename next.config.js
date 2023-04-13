/** @type {import('next').NextConfig} */

const isDebug = process.env.NODE_ENV !== "production"
const repository = "kimjbstar-blog"

const nextConfig = {
  reactStrictMode: true,
  basePath: isDebug ? "" : `/${repository}`,
  trailingSlash: true
}

module.exports = nextConfig
