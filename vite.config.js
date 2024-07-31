import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "production" ? "/Exclusive-vite/" : "/",
    server: {
      port: 3000,
    },
    build: {
      outDir: "dist",
    },
  };
});
