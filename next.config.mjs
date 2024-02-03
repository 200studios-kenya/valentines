/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.tenor.com',
				port: '',
				pathname: '/eiMqmu0vXz8AAAAi/**',
			},
			{
				protocol: 'https',
				hostname: 'gifdb.com',
				port: '',
				pathname: '/images/**',
			},
		],
	},
};

export default nextConfig;
