import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(data) {
    this.stockData = data.stockData;

    this.quoteTemplate = _.template($('#tmpl-quote-view').html());
    this.quoteElement = $('.quotes');
    this.stockList = [];

    this.stockData.forEach(function(stock) {
     var stockItem = new QuoteView({
       stock: stock,
       template: this.quoteTemplate
     });
     this.stockList.push(stockItem);
     }, this);
  },

  render: function() {
    this.quoteElement.empty();

    this.stockList.forEach(function(stockItem) {
      stockItem.render();

      this.quoteElement.append(stockItem.$el);
    }, this);

    return this;
  }

});

export default ApplicationView;
