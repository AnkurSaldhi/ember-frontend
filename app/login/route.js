import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

actions: {
    login: function() {      
      $.ajax({
        type: "POST",
        url: "http://localhost:4200/users/signin",
        data: JSON.stringify({email: "ankur47@gmail.com", password: "hello123"}),
        contentType: "application/json"
      }).then((data) => {
      	//console.log(data);
        if(data.user_data)
            console.log('iam logged in');
        else
            console.log('wrong input');
        this.transitionTo('users');
        //console.log("Ankur's app");
        //console.log(data.user_data);
        //this.transitionTo('users',data.user_id);
      
    });
}
  }
});
