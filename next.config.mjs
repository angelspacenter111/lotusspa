
const nextConfig = {
	reactCompiler: true,
	reactStrictMode: false,
	swcMinify: true,
	compress: true,
	compiler: {
		removeConsole: true,
	},
	experimental: {
		legacyBrowsers: false, // 🚀 Important
	}
};

export default nextConfig;
