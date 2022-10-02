import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import eslint from '@rollup/plugin-eslint';

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.js',
        format: 'es'
    },
    plugins: [
        eslint(),
        serve('build'),
        livereload(),
    ],
};
