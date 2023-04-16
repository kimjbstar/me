/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "/me",
  output: "export",
  images: {
    loader: "akamai",
    path: "/me"
  }
  // swcMinify: true,
  // experimental: {
  //   swcPlugins: [["typewind/swc", {}]]
  // }
}

module.exports = nextConfig
