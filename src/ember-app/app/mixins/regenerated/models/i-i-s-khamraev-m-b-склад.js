import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  сотрудник: DS.belongsTo('i-i-s-khamraev-m-b-сотрудник', { inverse: null, async: false }),
  товарНаСкладе: DS.hasMany('i-i-s-khamraev-m-b-товар-на-складе', { inverse: 'склад', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-склад.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-склад.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-склад.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товарНаСкладе: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-склад.validations.товарНаСкладе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-khamraev-m-b-склад', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    товарНаСкладе: hasMany('i-i-s-khamraev-m-b-товар-на-складе', 'Товар на складе', {
      
    })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-khamraev-m-b-склад', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
