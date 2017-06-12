import Backbone from 'backbone';

import Pet from 'app/models/pet';

var PetList = Backbone.Collection.extend({
  model: Pet
  url: "petdibs.herokuapp.com/pets" ,

  parse: function(data){
    return data.pets
  }
});

export default PetList;
