/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: {url: '/', static: true},
        src: {url: '/'},
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-postcss'
    ],
    optimize: {
        'bundle': true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        tailwindConfig: './tailwind.config.js',
        open: 'none',
        port: 8081
    },
    buildOptions: {
        /* ... */
    },
};
