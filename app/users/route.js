import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//params.user_id = 12;
		//return this.store.find('user',params.user_id);
		return this.store.find('user');
	}
});
