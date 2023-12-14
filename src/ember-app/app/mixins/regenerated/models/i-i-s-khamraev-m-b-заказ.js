import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОплаты: DS.attr('date'),
  датаОтгрузки: DS.attr('date'),
  статус: DS.attr('i-i-s-khamraev-m-b-состояние-заказа'),
  цена: DS.attr('decimal'),
  сотрудник: DS.belongsTo('i-i-s-khamraev-m-b-сотрудник', { inverse: null, async: false }),
  строкаЗаказа: DS.hasMany('i-i-s-khamraev-m-b-строка-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  датаОплаты: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-заказ.validations.датаОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОтгрузки: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-заказ.validations.датаОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-заказ.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-заказ.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-заказ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаЗаказа: {
    descriptionKey: 'models.i-i-s-khamraev-m-b-заказ.validations.строкаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-khamraev-m-b-документ'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-khamraev-m-b-заказ', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    строкаЗаказа: hasMany('i-i-s-khamraev-m-b-строка-заказа', 'Строка заказа', {
      нДС: attr('НДС', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      сумма: attr('Сумма', { index: 2 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-khamraev-m-b-заказ', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 2 }),
    статус: attr('Статус', { index: 3 })
  });
};
