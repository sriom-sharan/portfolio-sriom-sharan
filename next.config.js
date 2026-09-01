const isPages = process.env.GITHUB_PAGES === "true";

module.exports = {
  output: isPages ? "export" : undefined,
  basePath: isPages ? "/portfolio-sriom-sharan" : "",
  assetPrefix: isPages ? "/portfolio-sriom-sharan/" : "",
  images: {
    unoptimized: isPages,
    remotePatterns: [{
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },]
  },
};
