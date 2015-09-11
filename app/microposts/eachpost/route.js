import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params)
	{
		return this.store.find('micropost',params.micropost_id);
	},
	actions:
		{
			showcomments: function()
			{
				this.transitionTo('microposts.eachpost.comments')
			},

			deletethispost: function(model)
			{
				model.destroyRecord();
				this.transitionTo('microposts');
			}
		}
});
