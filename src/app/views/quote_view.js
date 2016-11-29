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
  },

  events: {
  'click .btn-buy': 'buyStock',
  'click .btn-sell': 'sellStock'
  },

  buyStock: function(event) {
    console.log(event);
    console.log("testing buy");
    event.preventDefault();
    this.stock.price += 1.00;
    this.render();
  },

  sellStock: function(event) {
    console.log(event);
    console.log("testing sell");
    event.preventDefault();
    this.stock.price -= 1.00;
    this.render();
  }
});

export default QuoteView;
