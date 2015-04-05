(function(root, factory) {
  if (typeof exports === 'object' && typeof require === 'function') {
    module.exports = factory(require('backbone'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['backbone'], function(Backbone) {
      // Use global variables if the locals are undefined.
      return factory(Backbone || root.Backbone);
    });
  } else {
    factory(Backbone);
  }
}(this, function(Backbone) {

  Backbone.Require = function() {
    var fileNames = Array.prototype.slice.call(arguments);
    var dfd = $.Deferred();

    fileNames = _.map(fileNames, function(fileName) {
      return fileName;
    });

    require(fileNames, function() {
      dfd.resolve.apply(dfd, arguments);
    });

    return dfd.promise();
  };
  return Backbone.Require;
}));
