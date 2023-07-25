/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // This needs to be true for the app folder to actually work and render the pages
  },
  // This option would automatically reload the website when there is a change in the code
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay before rebuilding
    };
    return config;
  },
};

module.exports = nextConfig;
