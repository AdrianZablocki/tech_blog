/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: 'mongodb+srv://appsynth:ipHJrbeE2pM46ps@atlascluster.f6unlqu.mongodb.net/?retryWrites=true&w=majority',
    API_URL: 'http://tech-blog-chi-bay.vercel.app',
  }
}

module.exports = nextConfig
