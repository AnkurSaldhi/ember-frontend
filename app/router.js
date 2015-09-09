import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  //this.route('users',{path:'users/:user_id'});
  this.route('users');

  this.route('touser',{path:'users/:user_id'});
  this.route('microposts',{path:'users/:user_id/microposts'});
});

export default Router;
