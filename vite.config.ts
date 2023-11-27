import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from "vite-plugin-static-copy"
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa"

const pwaOptions: Partial<VitePWAOptions> = {
  devOptions: {
    enabled: false,
  },
  workbox: {
    globPatterns: ["**/*.{js,wasm,zip,json,css,html}"],
    // Max file size - 30MB
    maximumFileSizeToCacheInBytes: 31457280,
  },
  includeAssets: ["**/*"],
  manifest: {
    theme_color: "#fff",
    background_color: "#fff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    short_name: "PyWebCode",
    description: "PyWebCode - simple python IDE in browser",
    name: "Python Web Code",
  },
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaOptions),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/pyodide",
          dest: "assets",
        },
      ],
    }),
  ],
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      // Polyfill for pyodide fetch
      "node-fetch": "isomorphic-fetch",
    },
  },

  worker: {
    format: "es",
  },
  server: {
    open: true,
  },
})
