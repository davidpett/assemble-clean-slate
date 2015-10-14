(function() {
  module.exports.register = function(Handlebars, options) {

    /**
    * code
    * @param {Object} options
    */
    Handlebars.registerHelper('code', function(options) {
      return options.fn(this);
    });

  };
}).call(this);
