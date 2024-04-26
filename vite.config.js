import { resolve } from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), mkcert()], // mkcert required only for local development
});
