import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  root: "movie-app", // Spécifie le dossier racine
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // Change ici si nécessaire
  },
  build: {
    outDir: "../dist", // Assure que le build est à la racine du projet
  },
});
