const isPages = process.env.GITHUB_PAGES === "true";

module.exports = {
  output: isPages ? "export" : undefined,
  basePath:  "" ,
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
