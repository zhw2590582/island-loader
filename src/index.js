const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const loaderUtils = require('loader-utils');
const schema = require('./schema.json');
const validateOptions = require('schema-utils').validateOptions;

const defaultOptions = {
  author: 'null',
  email: 'null',
  homepage: 'null'
}

module.exports = function (source) {
  this.cacheable && this.cacheable();
  const options = Object.assign({}, defaultOptions, loaderUtils.getOptions(this));
  var callback = this.async();
  const authorInfo = `/*\n @Author: ${options.author} \n\n @Email: ${options.email} \n\n @Homepage: ${options.homepage} \n\n @Date: ${new Date()}\n */ \n\n`;
  callback(null, `${authorInfo} export default ${ JSON.stringify(source) }`);
}