import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
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
