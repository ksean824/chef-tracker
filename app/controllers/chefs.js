import Ember from 'ember';

export default Ember.Controller.extend({
  totalChefs: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'isCookingToday', true),
  chefStudents: Ember.computed.mapBy('model', 'numberOfStudents'),
  totalStudents: Ember.computed.sum('chefStudents'),
  actions: {
    enter(chef) {
      Ember.set(chef, 'isCookingToday', true)
      chef.save();
    },
    exit(chef) {
      Ember.set(chef, 'isCookingToday', false)
      chef.save();
    },
    saveNewChef() {
      this.store.createRecord('chef', {
        isCookingToday: false,
        name: this.get('newChef')
      }).save()
      Ember.set(this, 'newChef', '')
    },
    decrementStudents(chef) {
      if (chef.get('numberOfStudents') != 0) {
        Ember.set(chef, 'numberOfStudents', (chef.get('numberOfStudents') - 1) )
        chef.save()
      }
    },
    incrementStudents(chef) {
      chef.incrementProperty('numberOfStudents')
//      Ember.set(chef, 'numberOfStudents', (chef.get('numberOfStudents') + 1) )
      chef.save()
    }
  }
});
