'use strict';

var fs = require('fs');
var path = require('path');

module.exports.register = function (Handlebars, options) {

  /**
   * code
   * @param {Object} options
   */

  Handlebars.registerHelper('code', function (options) {
    return options.fn(this);
  });

  Handlebars.registerHelper('read', function (fp) {
    return fs.readFileSync(path.resolve(this.content, fp), 'utf8');
  });
};
