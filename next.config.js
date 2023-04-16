/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "/me",
  output: "export"
  // swcMinify: true,
  // experimental: {
  //   swcPlugins: [["typewind/swc", {}]]
  // }
}

module.exports = nextConfig
