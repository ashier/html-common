/* */
"use strict";

define([
  'backbone',
  'message/views/MessageView',
  'message/models/Message'
], function(Backbone, MessageView, Message) {
  var Router = Backbone.Router.extend({
    routes: {
      '*actions': 'default'
    }
  });

  var initialize = function() {
    var router = new Router;

    // Handle default Routes
    router.on('route:default', function() {

      var messageView = new MessageView({
        el:$("#content"),
        model: new Message()
      });

      messageView.render();

    });

    // Start Backbone History
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
