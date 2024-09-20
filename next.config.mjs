/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "velo-moto-malorita.by",
        port: "",
        pathname: "/wp-content/uploads/**", // Убираем лишние слэши
      },
    ],
  },
};

export default nextConfig;
