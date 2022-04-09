import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      imagetools(),
      imagePresets({
          thumbnail: widthPreset({
              class: 'img thumb',
              loading: 'lazy',
              widths: [48, 96],
              formats: {
                  webp: { quality: 80 },
                  jpg: { quality: 70 },
              },
          }),
      }),
  ]
})
