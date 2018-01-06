import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname)
    },
    module: {
      rules: [
        {
          test: /\.island$/,
          use: [
            {
              loader: path.resolve('.'),
              options: options
            }
          ]
        }
      ]
    }
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
};
