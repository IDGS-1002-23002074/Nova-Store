
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['favicon.svg'],

      manifest: {
        name: 'Nova Store',
        short_name: 'Nova',
        description: 'Descubre productos, guarda tus favoritos y explora nuestra colección en Nova Store.',

        theme_color: '#0F172A',
        background_color: '#0F172A',

        display: 'standalone',
        start_url: '/',

        icons: [
          {
            src: 'image.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'image.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'image.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },

      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webmanifest}'
        ],
      },
    }),
  ],
})
