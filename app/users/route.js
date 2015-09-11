import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		if(!this.controllerFor('application').get('user'))
		{
			this.transitionTo('application');
		}
	},

	model: function() {
		//params.user_id = 12;
		//return this.store.find('user',params.user_id);
		return this.store.find('user');
	},
	actions:{
		toUser:function(id){
			this.transitionTo('touser',id);
		}
	}
});
