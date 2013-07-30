/* */
define([
  'backbone'
], function(Backbone) {

  var MessageView = Backbone.View.extend({

    initialize: function() {
    },

    render: function() {
      var templateHTML = _.template($('#message-template').html(), {
        message: this.model.toJSON().message,
        description: this.model.toJSON().description
      });
      this.$el.html(templateHTML);
      return this;
    },

  });

  return MessageView;
});
