// // vite.config.js
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     port: 3000,  // ← This changes the port
//     strictPort: true, // ← Prevents fallback to another port if 3000 is busy
//   }
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    strictPort: true,
    host: true // Add this line
  }
})