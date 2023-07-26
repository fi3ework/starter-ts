import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  bundle: false,
  format: ['esm'],
  clean: true,
  sourcemap: true,
  dts: false,
  target: 'es2020',
})
