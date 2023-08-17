import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Tomato': 'hsl(4, 100%, 67%)',
        'Dark-Slate-Grey': 'hsl(234, 29%, 20%)',
        'Charcoal-Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        'White': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
export default config
