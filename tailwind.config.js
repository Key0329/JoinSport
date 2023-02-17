/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1320px',
    },
    fontSize: {
      xs: ['0.75rem', '1.125rem'], // 12px
      sm: ['0.875rem', '1.25rem'], // 14px
      base: ['1rem', '1.5rem'], // 16px
      lg: ['1.125rem', '1.75rem'], // 18px
      xl: ['1.5rem', '2.25rem'], // 24px
      '2xl': ['1.75rem', '2.625rem'], // 28px
      '3xl': ['2rem', '3rem'], // 32px
      '4xl': ['2.5rem', '3.75rem'], // 40px
    },

    extend: {
      colors: {
        primary: {
          '01': '#EF5230',
          '02': '#FBE3D1',
          '03': '#FAEDE2',
          '04': '#FFD3AB',
        },
        secondary: {
          coffee: '#D8BFB2',
          blue: '#9BCBDD',
          yellow: '#FFCE7E',
        },
      },
    },
  },
  plugins: [],
};
