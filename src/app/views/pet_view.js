import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var PetView = Backbone.View.extend({

  initialize: function(options) {
    this.template =  options.template;

    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    console.log(this);
    var finalTemplate = this.template({pet: this.model.attributes});
    this.$el.html(finalTemplate);

    return this;
  }


});

export default PetView;
