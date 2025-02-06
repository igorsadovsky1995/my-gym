import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://igorsadovsky1995.github.io/my-gym/', // Добавьте этот параметр
  plugins: [react()],
});
