/** @type {import('next').NextConfig} */
const nextConfig = {
	reactCompiler: true,
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		removeConsole: true,
	},
	experimental: {
		legacyBrowsers: false, // 🚀 Important
	}
};

export default nextConfig;
