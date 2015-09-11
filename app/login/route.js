import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

actions: {
    login: function() {   
      $.ajax({
        type: "POST",
        url: "http://localhost:4200/users/signin",
        data: JSON.stringify({email: this.controller.get('email'), password: this.controller.get('password')}),
        contentType: "application/json"
      }).then((data) => {
      	//console.log(data);
        if(data.response === 'success')
          {
            //console.log(data.user_data.created_at)
            //data.user_data.id

            this.controllerFor('application').set('user',data.user_data);
            console.log('iam logged in');
            //this.session.set('user',data.user_data)
            this.transitionTo('users');
          }
        else
          {
            console.log('wrong input');
          }
        //console.log(data.user_data);
        //this.transitionTo('users',data.user_id);
      
    });
}
  }
});
