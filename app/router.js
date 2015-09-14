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
  this.route('microposts',{path:'users/:user_id/microposts'}, function() {
          this.route('eachpost', { path: '/:micropost_id'}, function() {
                this.route('comments', { path: '/comments'}, function() {})
          });
          //this.route('comments', { path: '/:micropost_id/comments'}, function() {})
  });
  this.route('register');
  this.route('signup');
  this.route('like');
});

export default Router;
