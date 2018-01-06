# island-loader
> A island loader for webpack(目前测试用)

## Install

```
$ npm i --save-dev island-loader
```

## Usage

```js
// Add island-loader in webpack.config.js
module: {
    rules: [{
        test: /\.island$/,
        use: {
            loader: 'island-loader',
            options: {
                name: 'Alice'
            }
        }
    }]
}
```

## License

MIT © [Harvey Zack](https://www.zhw-island.com/)