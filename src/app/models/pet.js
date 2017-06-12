import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var Pet = Backbone.Model.extend({
  // defaults: {
  //   name:
  // }
  initialize: function(params) {
    console.log(params.name)
  }

});

export default Pet;
