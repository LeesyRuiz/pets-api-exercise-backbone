import $ from 'jquery';
import _ from 'underscore';

import PetList from 'app/collections/pet_list';
import PetListView from 'app/views/pet_list_view';
import PetView from 'app/views/pet_view';
import Pet from 'app/models/pet';

var petTemplate;
var petList;


$(document).ready(function() {
  var petTemplate = _.template($('#pet-card-template').html());
  var petList = new PetList();
  petList.fetch();

  var options = {
    petTemplate: petTemplate,
    el: $('main'),
    model: petList
  };

  var application = new PetListView(options);
  application.render();

});
