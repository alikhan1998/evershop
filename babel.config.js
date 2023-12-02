module.exports = {
  babelrcRoots: [babel.config.js
  ],
  parserOpts: {
    allowReturnOutsideFunction: true
  },
  presets: [@babel/preset-env
    [
      "@babel/preset-env",
      {
        "exclude": [
          "@babel/plugin-transform-regenerator",
          "@babel/plugin-transform-async-to-generator"
        ]
      }
    ],
    "@babel/preset-react"
  ]
};
