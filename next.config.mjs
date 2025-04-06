const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = 'portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repositoryName}` : '',
  assetPrefix: isGithubPages ? `/${repositoryName}/` : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Initialize userConfig as null if the import fails
let userConfig = null;
try {
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    userConfig = await import('./v0-user-next.config');
  } catch (innerError) {
    // Ignore error
  }
}

if (userConfig) {
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;

