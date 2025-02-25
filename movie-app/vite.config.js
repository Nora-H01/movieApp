import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  root: "movie-app", // Point d'entrée
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // Port pour le développement local
  },
  build: {
    outDir: "dist", // Le dossier dist reste dans movie-app
    emptyOutDir: true, // Vide le dossier dist avant build
  },
});
