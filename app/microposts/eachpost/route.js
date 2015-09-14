import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function(params)
	{
		//debugger
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
			},

			likethispost: function(model)
			{
				this.refresh();
				var like_obj = this.store.createRecord('like',{
					'micropost': model
				});
				//{{debugger}}
				like_obj.save().then((data) => {
					{{debugger}}
					console.log(data.response);
				})
			}


		}
});
