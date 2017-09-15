import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteChef(chef) {
      chef.destroyRecord() //saves automatically, no need to call "Save"
      this.transitionToRoute('chefs');
    }
  }
});
