import Ember from 'ember';

export default Ember.Route.extend({
	actions: 
	{
		signup: function()
		{
			var new_user = this.store.createRecord('user',{
			'email': this.controller.get('email'),
			'password': this.controller.get('password'),
			'confirm_password': this.controller.get('confirm_password')
		});
		new_user.save().then(()=> {
			console.log('new user signed up successfully');
			});

		}
	}	

});
