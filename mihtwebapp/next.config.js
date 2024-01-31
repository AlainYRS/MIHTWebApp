/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default(
    {
        register: true,
        skipWaiting: true,
        dest: "public"
    }
);
  
module.exports = withPWA();