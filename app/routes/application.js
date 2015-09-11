import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    $.ajax({
        type: "GET",
        url: "http://localhost:4200/users/checkuser",
        //data: JSON.stringify({email: this.controller.get('email'), password: this.controller.get('password')}),
        contentType: "application/json"
      }).then((data) => {
        //console.log(data);
        if(data.response === 'success')
          {
            controller.set('user',data.user_data);
            console.log('already logged in....redirecting to /users');
            //this.session.set('user',data.user_data)
            this.transitionTo('users');
          }
        else
          {
            console.log("user isn't logged in previously");
          }

  })
},

  actions: {
    logout: function(){
      self=this
      $.ajax({
        type: "POST",
        url: "http://localhost:4200/logout",
        //data: JSON.stringify({email: this.controller.get('email'), password: this.controller.get('password')}),
        contentType: "application/json"
      }).then((data) => {
        //console.log(data);
        if(data.response === 'signout_success')
          {
            //controller.set('user',data.user_data);
            self.controllerFor('application').set('user',null);
            console.log('signed out successfully....redirecting to application');
            //this.session.set('user',data.user_data)
            self.transitionTo('application');
          }
        else
          {
            console.log('error while signing out');
          }

      })
    }
  }
});
