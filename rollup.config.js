import flowEntry from 'rollup-plugin-flow-entry'
import flow from 'rollup-plugin-flow'
import babel from 'rollup-plugin-babel'

const babelOpts = {
  babelrc: false,
  presets: ['@babel/preset-env', '@babel/preset-flow']
}

export default {
  input: 'index.js',
  output: { file: 'lib/index.js', format: 'cjs' },
  plugins: [
    flowEntry(),
    flow(),
    babel(babelOpts)
  ]
}
