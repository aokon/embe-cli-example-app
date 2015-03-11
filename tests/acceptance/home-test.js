import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Home', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentPath(), 'home');
  });
});

test('It has valid content', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(find('h1').text(), 'Home view', 'It has the valid header');
  });
});
