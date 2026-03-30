import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          const modulePath = id.toString().split('node_modules/')[1];
          if (!modulePath) return 'vendor';

          const pkg = modulePath.split('/')[0].startsWith('@')
            ? modulePath.split('/').slice(0, 2).join('/')
            : modulePath.split('/')[0];

          return `vendor-${pkg.replace('@', '').replace('/', '-')}`;
        },
      },
    },
  },
}));
