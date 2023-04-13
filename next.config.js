/** @type {import('next').NextConfig} */

const isDebug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: "/"
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
}

module.exports = nextConfig
