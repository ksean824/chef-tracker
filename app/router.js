import Ember from 'ember';
import config from './config/environment';


const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('chefs', function() {
    this.route('chef', {path: ':chef_id'})
    this.route('chef.edit', {path: ':chef_id/edit'})
  })
  this.route('about')
  this.route('training')
  this.route('favorite-word', {path: 'favorite-word/:word'})
  this.route('contact')
});

export default Router;
