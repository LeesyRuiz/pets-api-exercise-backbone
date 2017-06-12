import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import PetView from './pet_view';


var PetListView = Backbone.View.extend({
  initialize: function(params) {
    // this.petTemplate = _.template($('#pet-card-template').html());
    this.petTemplate = params.petTemplate;

    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {

    var self = this;
    self.$('#pet-list').empty();
    self.model.each(function(pet) {
      var petView = new PetView({
        model: pet,
        template: self.petTemplate
      });

      self.$('#pet-list').append(petView.render().$el);
    });

    return this;
  }
  //   this.listElement = this.$('#pet-list');
  //
  //   this.petList = [];
  //
  //   this.model.forEach(function(rawPet) {
  //     this.addPet(rawPet);
  //   }, this);
  //
  //   // update this for creating a new pet
  //   // this.input = {
  //   //   title: this.$('')
  //   // };
  // },
  // render: function() {
  //   this.listElement.empty();
  //   this.petList.forEach(function(pet) {
  //     pet.render();
  //
  //     this.listElement.append(pet.$el);
  //
  //   }, this);
  //   return this;
  // }

});

export default PetListView;
