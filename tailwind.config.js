/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: { DEFAULT: '#0B0B0C', 950: '#0B0B0C', 900: '#0F0F12', 800: '#151518' },
        onyx: '#1B1C1F',
        smoke: '#9BA3AF',
        // Refined premium golds (warm, desaturated for luxury feel)
        gold: { light: '#F2E8C4', DEFAULT: '#C9A86A', dark: '#8E6E2B' },
        porcelain: '#F6F6F4',
        sand: '#EFEAE3',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(201,168,106,.22), 0 10px 30px rgba(0,0,0,.6)',
      },
    },
  },
  plugins: [],
}

