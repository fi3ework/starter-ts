import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  bundle: false,
  format: ['cjs', 'esm'],
  clean: true,
  sourcemap: true,
  dts: true,
  target: 'node16',
})
