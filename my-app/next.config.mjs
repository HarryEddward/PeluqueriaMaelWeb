import million from 'million/compiler';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Otras configuraciones de Next.js aquí
};

// Combina los plugins correctamente
const configWithIntl = withNextIntl(nextConfig);
const finalConfig = million.next(configWithIntl);

export default finalConfig;