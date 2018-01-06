const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const loaderUtils = require('loader-utils');
const schema = require('./schema.json');
const validateOptions = require('schema-utils').validateOptions;

const defaultOptions = {
  name: 'island'
}

module.exports = function (source) {
  this.cacheable && this.cacheable();
  const options = Object.assign({}, defaultOptions, loaderUtils.getOptions(this));
  var callback = this.async();
  source = source.replace(/\[name\]/g, options.name);
  callback(null, `export default ${ JSON.stringify(source) }`);
}