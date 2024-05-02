import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import prettyCssModules from 'vite-plugin-pretty-css-modules';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), prettyCssModules(), tsconfigPaths()],

  // Treat JS files as JSX
  esbuild: {
    loader: 'jsx',
    include: ['src/**/*.js'],
    exclude: []
  }
});
