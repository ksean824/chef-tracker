import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    isCookingToday: DS.attr('boolean'),
    numberOfStudents: DS.attr('number'),
    description: DS.attr('string')
});
