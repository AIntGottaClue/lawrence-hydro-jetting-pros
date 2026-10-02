import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://lawrencehydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
