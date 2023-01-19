require('dotenv').config();

module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'localhost',
      // Your domain(s) here
    ],
    deviceSizes: [
      480,
      1024,
      1280,
      1920,
      2560,
    ],
  },
};
