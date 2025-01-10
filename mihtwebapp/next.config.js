/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default(
    {
        register: true,
        skipWaiting: true,
        dest: "public"
    }
);
  
// module.exports = withPWA();

module.exports = withPWA({
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "firebasestorage.googleapis.com",
          port: "",
          pathname: "/v0/b/mihottacoswebapp.appspot.com/o/**",
        },
      ],
    },
  });