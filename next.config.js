/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'img.icons8.com', 'raw.githubusercontent.com', 'i.imgur.com', 'img.freepik.com','media.geeksforgeeks.org', 'iili.io', 'play-lh.googleusercontent.com','upload.wikimedia.org','www.angularminds.com']
    }
  }
  
  module.exports = nextConfig
  