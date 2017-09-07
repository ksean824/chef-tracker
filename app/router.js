import Ember from 'ember';
import config from './config/environment';


const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('chefs', function() {
    this.route('chef', {path: ':chef_id'})
  })
  this.route('about')
  this.route('training')
  this.route('favorite-word', {path: 'favorite-word/:word'})
});

export default Router;
