import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
  initialize: function(data) {
    this.stock = data.stock;
    this.template = data.template;
  },

  render: function() {
    var html = this.template({stock: this.stock});
    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});

export default QuoteView;
