import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import { startCase } from 'lodash'

import PKG from '../../package.json'

function configure(env, target) {
  const isProd = env === 'production'
  const isUmd = target === 'umd'
  const isModule = target === 'module'
  const input = `src/index.js`
  const deps = []
    .concat(PKG.dependencies ? Object.keys(PKG.dependencies) : [])
    .concat(PKG.peerDependencies ? Object.keys(PKG.peerDependencies) : [])

  const plugins = [
    resolve({
      browser: true,
    }),
    isUmd &&
      commonjs({
        exclude: [`src/**`],
      }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    builtins(),
    babel({
      include: [`src/**`],
      presets: [['env', { modules: false }], 'react', 'stage-0'],
      plugins: ['external-helpers'],
    }),
    globals(),
    isUmd && isProd && uglify(),
  ].filter(Boolean)

  if (isUmd) {
    return {
      plugins,
      input,
      external: ['react', 'react-dom'],
      output: {
        format: 'umd',
        file: isProd ? 'dist/react-values.min.js' : 'dist/react-values.js',
        exports: 'named',
        name: startCase(PKG.name).replace(/ /g, ''),
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  }

  if (isModule) {
    return {
      plugins,
      input,
      output: [
        {
          file: PKG.module,
          format: 'es',
          sourcemap: true,
        },
        {
          file: PKG.main,
          format: 'cjs',
          exports: 'named',
          sourcemap: true,
        },
      ],
      external: id => {
        return !!deps.find(dep => dep === id || id.startsWith(`${dep}/`))
      },
    }
  }
}

export default [
  configure('development', 'module'),
  process.env.NODE_ENV === 'production' && configure('development', 'umd'),
  process.env.NODE_ENV === 'production' && configure('production', 'umd'),
].filter(Boolean)
