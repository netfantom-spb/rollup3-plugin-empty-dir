/* eslint-env node */

export default
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/empty-dir-esm.js',
        format: 'esm',
        sourcemap: 'inline',
        exports: 'named',
        generatedCode: {
          constBindings: true,
        },
      },
      {
        file: 'dist/empty-dir-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
        exports: 'default',
        generatedCode: {
          constBindings: true,
        },
      },
    ],
    external: ['fs-extra'],
  }

