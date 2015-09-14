import DS from 'ember-data';

export default DS.Model.extend({
  micropost: DS.belongsTo('micropost')
});
