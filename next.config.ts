const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/**', // يسمح بجميع المسارات
      },
    ],
  },
};

export default nextConfig;
