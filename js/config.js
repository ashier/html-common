requirejs.config({
  baseUrl: '../js',
  paths: {
    jquery: 'vendors/jquery',
    underscore: 'vendors/underscore',
    backbone: 'vendors/backbone'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require([
  'sample'
], function(App) {
  console.log("Flickr Search Application Initialized...");
  // App.initialize();
});
