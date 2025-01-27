import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // Your project root containing index.html
  build: {
    outDir: "dist", // Output folder for build files
    rollupOptions: {
      input: {
        main: "index.html", // Your main entry point
        script: "script.js", // Add `script.js` as an entry point
      },
    },
  },
});
