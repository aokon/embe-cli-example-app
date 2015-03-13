import DS from 'ember-data';

var Todo = DS.Model.extend({
  name: DS.attr('string')
});

//Todo.reopenClass({
  //FIXTURES: [
    //{id: 1, name: 'Dummyy'},
    //{id: 2, name: 'Lorem'}
  //]
//});

export default Todo;
