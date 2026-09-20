/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          sable: {
            DEFAULT: '#F9F6F0',
            dark: '#EFECE6',
          },
          foret: {
            DEFAULT: '#1B3B2B',
            light: '#2C5E43',
          },
          safran: {
            DEFAULT: '#E5A93B',
            hover: '#D4962A',
          },
          terracotta: {
            DEFAULT: '#C85A32',
          }
        },
        fontFamily: {
          serif: ['Playfair Display', 'Georgia', 'serif'],
          sans: ['Plus Jakarta Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }