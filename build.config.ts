import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  externals: ['electron'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    // inlineDependencies: true,
  },
})
