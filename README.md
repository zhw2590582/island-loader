# island-loader [![Build Status](https://www.travis-ci.org/zhw2590582/island-loader.svg?branch=master)](https://www.travis-ci.org/zhw2590582/island-loader)
> A island loader for webpack(目前测试用于文件头部输出作者信息)

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
                author: 'Harvey Zack',
                email: '717995589@qq.com',
                homepage: 'http://www.zhw-island.com'
            }
        }
    }]
}
```

## License

MIT © [Harvey Zack](https://www.zhw-island.com/)