const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");

function resolveAlias(mode)  {
  return {
    "aloha-vue": path.resolve(__dirname, "node_modules/aloha-vue"),
    axios: path.resolve(__dirname, "node_modules/axios"),
    fecha: path.resolve(__dirname, "node_modules/fecha"),
    "lodash-es": path.resolve(__dirname, "node_modules/lodash"),
    moment: path.resolve(__dirname, "node_modules/moment"),
    "vue-style-loader": path.resolve(__dirname, "node_modules/vue-style-loader"),
    "vue-upload-component":  path.resolve(__dirname, "node_modules/vue-upload-component"),
    vue: path.resolve(__dirname, mode === "development" ? "node_modules/vue/dist/vue.esm-bundler.js" : "node_modules/vue/dist/vue.esm-browser.prod.js"),
    vuex: path.resolve(__dirname, "node_modules/vuex"),
    "vue-loader": path.resolve(__dirname, "node_modules/vue-loader"),
    leaflet: path.resolve(__dirname, "node_modules/leaflet"),
    inputmask: path.resolve(__dirname, "node_modules/inputmask"),
    autosize: path.resolve(__dirname, "node_modules/autosize"),
    mediaelement: path.resolve(__dirname, "node_modules/mediaelement"),
    "mediaelement-plugins": path.resolve(__dirname, "node_modules/mediaelement-plugins"),
    "get-contrast-ratio": path.resolve(__dirname, "node_modules/get-contrast-ratio"),
    popperjs: path.resolve(__dirname, "node_modules/@popperjs/core"),
    "tiny-emitter": path.resolve(__dirname, "node_modules/tiny-emitter"),
    dompurify: path.resolve(__dirname, "node_modules/dompurify"),
    tinymce: path.resolve(__dirname, "node_modules/tinymce"),
    "@floating-ui/vue": path.resolve(__dirname, "node_modules/@floating-ui/vue"),
  };
}

function getRules(mode) {
  const TARGET = process.env.npm_lifecycle_event;
  const RULES = [
    // {
    //   test: /\.js$/,
    //   enforce: "pre",
    //   use: ["source-map-loader"],
    // },
    {
      test: /\.pug$/,
      use: ["vue-pug-loader"],
    },
    {
      test: /\.vue$/,
      use: ["vue-loader"],
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        }
      ],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
      exclude: [
        /tinymce\/skins\/content\/default\/content\.css$/,
        /tinymce\/skins\/ui\/oxide\/content\.css$/,
      ],
    },
    {
      test: /tinymce\/skins\/ui\/oxide\/content\.css$/i,
      use: ["css-loader"],
    },
    {
      test: /tinymce\/skins\/content\/default\/content\.css$/i,
      use: ["css-loader"],
    },
    {
      test: /\.(png|jpg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "/static/[hash].[ext]"
          }
        }
      ]
    },
    {
      test: /\.html$/,
      use: ["html-loader"],
      exclude: [
        /index\.html$/,
      ],
    },
  ];

  return RULES;
}

const TARGET = process.env.npm_lifecycle_event;
module.exports = (env, options) => {
  return {
    watchOptions: {
      ignored: /node_modules/,
    },
    entry: ["./src/main.js"],
    output: {
      path: path.resolve(__dirname, "./dist/"),
      publicPath: options.mode === "development" ? "/" : "/bitv/",
      filename: "bundle.[id].[contenthash].js",
      chunkFilename: "chunk.[id].[contenthash].js",
      asyncChunks: true,
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          },
          tinymceVendor: {
            test: /[\\/]node_modules[\\/](tinymce)[\\/](.*js|.*skin.css)|[\\/]plugins[\\/]/,
            name: "tinymce",
          },
        }
      }
    },
    module: {
      rules: getRules(options.mode),
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [],
        cleanAfterEveryBuildPatterns: ["**/*", "!assets/**", "!styles/**"],
      }),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
        templateParameters: {
          stylesPath: options.mode === "development" ? "/styles/styles.css" : "/bitv/styles/styles.css",
          logoPath: options.mode === "development" ? "/styles/logo.png" : "/bitv/styles/logo.png",
        },
      }),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     {
      //       from: "./index.html",
      //       to: "./404.html",
      //     },
      //   ],
      // }),
      new ESLintPlugin({
        overrideConfigFile: path.resolve(__dirname, ".eslintrc.js"),
        cache: options.mode === "development",
        extensions: [
          "vue",
          "js",
        ],
      }),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
    ],
    resolve: {
      alias: resolveAlias(options.mode),
    },
    devServer: {
      hot: false,
      liveReload: false,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "dist"),
        publicPath: "/",
      },
      compress: true,
      port: 9000,
      client: {
        overlay: false
      },
    },
    ignoreWarnings: [/Failed to parse source map/],
  };
};
