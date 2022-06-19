import ts from 'rollup-plugin-ts';
import { resolve } from "path";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import del from 'rollup-plugin-delete';
import commonjs from '@rollup/plugin-commonjs';
import polyfills from "rollup-plugin-polyfill-node";
import { terser } from "rollup-plugin-terser";
import { dependencies } from './package.json';

const deps = Object.keys(dependencies);

export default {
    input: resolve(__dirname, "index.ts"),
    treeshake: true,
    preserveEntrySignatures: true,
    external: deps,
    output: [{
        format: 'esm',
        file: resolve('dist/index.js'),
    }],
    plugins: [
        del({
            targets: ['./dist']
        }),
        polyfills(),
        nodeResolve(),
        ts(),
        commonjs(),
        json(),
        terser({
            format: {
                comments: true
            }
        })
    ]
};