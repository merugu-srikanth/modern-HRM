import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin-reverse 8s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'spin-reverse': {
          'from': {
            transform: 'rotate(0deg)'
          },
          'to': {
            transform: 'rotate(-360deg)'
          }
        }
      }
    },
  },
 
  plugins: [react(),
    tailwindcss()
  ],
})
