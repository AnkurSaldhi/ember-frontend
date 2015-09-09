import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return $.ajax({
	        type: "GET",
	        url: "http://localhost:4200/users/" + params.user_id + "/microposts",
	        //data: JSON.stringify({email: this.controller.get('email'), password: this.controller.get('password')}),
	        contentType: "application/json"
	      	})
	}
			//return this.store.find('micropost',params.user_id);

});
