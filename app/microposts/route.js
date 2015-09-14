import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
                //this calls microposts index method with user_id in params
		return this.store.find('micropost', params);
	},

	actions: 
	{
		showthispost: function(micropost_id)
			{
				this.transitionTo('microposts.eachpost',micropost_id)
			},

		createPost:function(){
                        this.refresh();
                        //var user = this.controllerFor('application').get('user');
                        //debugger;
                        var model = this.store.createRecord('micropost',{
                                'content':this.controller.get('data')
                                //'user': user
                        });
                        model.save().then(()=>{
                                //model.reload();
                                //var models = this.store.find('micropost',{'user_id':user.id});
                                //this.controller.set('model',models);
                                console.log('micropost is saved');
                        });
 		}
	}
});
