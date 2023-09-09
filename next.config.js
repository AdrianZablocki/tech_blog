/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: 'mongodb://127.0.0.1:27017/tech_blog',
    API_URL: 'http://localhost:3000'
  },
  images: {
    domains: ['bs-uploads.toptal.io', 'www.searchenginejournal.com']
  }
}

module.exports = nextConfig
