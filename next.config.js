/** @type {import('next').NextConfig} */
const nextConfig = {
  babel: {
    plugins: [["styled-components", { ssr: true }]],
  },
};

module.exports = nextConfig;
