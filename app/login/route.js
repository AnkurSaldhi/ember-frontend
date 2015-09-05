import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

actions: {
    login: function() {      
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/users/signin",
        data: JSON.stringify({email: "ankur47@gmail.com", password: "hello123"}),
        contentType: "application/json"
      }).then((data) => {
      	console.log(data);
        console.log('iam in login');
        this.transitionTo('users');
      
    });
}
  }
});
