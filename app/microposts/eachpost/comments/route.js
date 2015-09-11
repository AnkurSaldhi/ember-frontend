import Ember from 'ember';

export default Ember.Route.extend({
	model: function()
	{
		var obj = this.modelFor('microposts.eachpost') 
		return this.store.find('comment',{micropost_id:obj.get('id')});
	},

	actions:
	{
		createcomment:function(){
                        //var user = this.controllerFor('application').get('user');
                        //debugger;
                        this.refresh();
                        var obj = this.modelFor('microposts.eachpost') 

                        var comment = this.store.createRecord('comment',{
                                'body':this.controller.get('data'),
                                'micropost':obj
                        });
                        //comment.set('micropost',obj)
                        comment.save().then(()=>{
                                //var models = this.store.find('micropost',{'user_id':user.id});
                                //this.controller.set('model',models);
                                console.log('comment is saved');
                                this.controller.set('body',null);
                        });
			}
	}

});
