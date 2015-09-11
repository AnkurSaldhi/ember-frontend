import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  confirm_password: DS.attr('string')
  //created_at: DS.attr('date')
});
