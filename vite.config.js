import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
    
  ],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3001", // Change this to your actual backend if needed
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
// plugins: [
//   {
//     name: 'custom-logger',
//     configureServer(server) {
//       const originalWarn = server.config.logger.warn;
//       const originalError = server.config.logger.error;

//       server.config.logger.warn = (msg, options) => {
//         console.log('\x1b[33m%s\x1b[0m', msg); // Yellow for warnings
//         originalWarn(msg, options);
//       };

//       server.config.logger.error = (msg, options) => {
//         console.log('\x1b[31m%s\x1b[0m', msg); // Red for errors
//         originalError(msg, options);
//       };
//     }
//   }
// ]

// plugins: [react()],
