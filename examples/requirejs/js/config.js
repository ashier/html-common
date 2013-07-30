requirejs.config({
  baseUrl: 'js',
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
  'app'
], function(App) {
  console.log("Application Initialized...");
  App.initialize();
});
