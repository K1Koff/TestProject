import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.js',
        format: 'es'
    },
    plugins: [
        serve('build'), // index.html should be in root of project
        livereload(),
    ],
}
