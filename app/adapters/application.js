import DS from 'ember-data';

//using http mocks for test env cause errors for
//acceptance tests
export default DS.RESTAdapter.extend({
  namespace: 'api'
});

//export default DS.FixtureAdapter.extend({});
