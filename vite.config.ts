import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ViteImageOptimizer({
            jpg: {
                quality: 80,
                progressive: true,
                mozjpeg: true,
            },
            png: {
                quality: 80,
                compressionLevel: 9,
            },
            webp: {
                lossless: false, 
                quality: 80,
                effort: 6,
            },
            logStats: true,
        }),
    ],
    base: '/preview/'
})
