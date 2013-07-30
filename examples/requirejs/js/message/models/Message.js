/* */
define([
  'backbone'
], function(Backbone) {

  var Message = Backbone.Model.extend({

    defaults: {
      message: "Message From Backbone Model",
      description: "<strong>This message comes from a backbone model and is directly rendered as a template from a view.</strong><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },

    initialize: function() {

    }

  });

  return Message;
});
