import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: 'local' // Esto asegura que los estilos sean locales y no globales
    }
  }
})