import Backbone from 'backbone';

var Pet = Backbone.Model.extend({
defaults: {
  name: "example name",
  img: "example img",
  breed: "example breed",
  age: "example age",
  about: "example about",
  owner: "example owner "
},

initialize: function(options) {
    console.log("Created new pet with info " + this.options);
  },

// toggleComplete: function() {
//     var newPet = !(this.get('new'));
//     this.set('new', newPet);
//     this.save();
//   },

});

export default Pet;
