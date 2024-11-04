import type { Config } from "tailwindcss";
import { configFontifyFonts } from './fontifyTailwind';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/index.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: configFontifyFonts,
      colors: {
        background: '#000000',
        primary: '#FFFFFF',
        secondary: '#9CA3AF',
        tertiary: '#00FFFF',
        accentPrimary: '#00A8CC',
        accentSecondary: '#006C84',
        // #00FFFF
      },
      // En lugar de gradientColorStops, usa backgroundImage o gradientColorStops así:
      backgroundImage: {
        'gradientPrimaryT': 'linear-gradient(to top, #00A8CC, #006C84)',
        'gradientPrimaryL': 'linear-gradient(to left, #00A8CC, #006C84)',
        'gradientBlackTextB': 'linear-gradient(to bottom, #ffffff, #64748B)',
      },
      // O si prefieres usar gradientColorStops:
      gradientColorStops: {
        'gradientStartPrimary': '#00A8CC',
        'gradientEndPrimary': '#006C84',
      },
    },
  },
  plugins: [],
};
export default config;
