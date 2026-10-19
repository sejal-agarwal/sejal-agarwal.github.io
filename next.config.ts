import type { NextConfig } from 'next';

// This site now lives at https://sejalagarwal.ca/original-website, served through the
// main site's rewrites. basePath moves every page and asset under that prefix.
const nextConfig: NextConfig = {
  basePath: '/original-website',
};

export default nextConfig;
