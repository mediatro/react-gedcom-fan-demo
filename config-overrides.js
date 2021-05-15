const {
    override,
    addWebpackResolve,
    addWebpackPlugin,
    addWebpackModuleRule,
} = require("customize-cra");
const path = require("path");
const webpack = require("webpack");
const I18nPlugin = require('i18n-webpack-plugin');

const locale = {
    en: require('arbre-o-matic/locales/en.json'),
    fr: require('arbre-o-matic/locales/fr.json')
};
const defaultLocale = 'en';


const babelConf = {
    loader: 'babel-loader',
    options: {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        "ie": "11"
                    },
                    modules: false,
                    useBuiltIns: 'usage',
                    corejs: "core-js@2",
                    loose: true
                }
            ]
        ],
        sourceType: "unambiguous",
        ignore: [
            /\/core-js/,
        ]
    }
};

module.exports = override(
    addWebpackResolve({alias: {
        fs: 'pdfkit/js/virtual-fs.js'
    }}),
    addWebpackModuleRule({
        test: /\.js$/,
        include: /(pdfkit|saslprep|unicode-trie|unicode-properties|dfa|linebreak|panzoom)/,
        use: babelConf
    }),
    addWebpackPlugin(
        new I18nPlugin(locale[defaultLocale], {nested: true}),
    ),
    /*addWebpackPlugin(new webpack.ProvidePlugin({
        __: 'jquery',
    })),*/
    addWebpackModuleRule(  { enforce: 'post', test: /fontkit[/\\]index.js$/, loader: "transform-loader?brfs" }),
    addWebpackModuleRule({ enforce: 'post', test: /unicode-properties[/\\]index.js$/, loader: "transform-loader?brfs" }),
    addWebpackModuleRule({ enforce: 'post', test: /linebreak[/\\]src[/\\]linebreaker.js/, loader: "transform-loader?brfs" }),
    addWebpackModuleRule({ test: /src[/\\]assets/, loader: 'arraybuffer-loader'}),
    addWebpackModuleRule({ test: /\.afm$/, loader: 'raw-loader'})
);

