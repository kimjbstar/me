/** @type {import('next').NextConfig} */

const isDebug = process.env.NODE_ENV !== "production"
const repository = "kimjbstar-blog"

const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://kimjbstar.github.io/blog"
      : ""
}

module.exports = nextConfig
