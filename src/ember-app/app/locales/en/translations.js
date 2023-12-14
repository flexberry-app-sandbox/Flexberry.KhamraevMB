import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKhamraevMBДокументLForm from './forms/i-i-s-khamraev-m-b-документ-l';
import IISKhamraevMBЗаказLForm from './forms/i-i-s-khamraev-m-b-заказ-l';
import IISKhamraevMBНакладнаяLForm from './forms/i-i-s-khamraev-m-b-накладная-l';
import IISKhamraevMBСкладLForm from './forms/i-i-s-khamraev-m-b-склад-l';
import IISKhamraevMBСотрудникLForm from './forms/i-i-s-khamraev-m-b-сотрудник-l';
import IISKhamraevMBТоварLForm from './forms/i-i-s-khamraev-m-b-товар-l';
import IISKhamraevMBДокументEForm from './forms/i-i-s-khamraev-m-b-документ-e';
import IISKhamraevMBЗаказEForm from './forms/i-i-s-khamraev-m-b-заказ-e';
import IISKhamraevMBНакладнаяEForm from './forms/i-i-s-khamraev-m-b-накладная-e';
import IISKhamraevMBСкладEForm from './forms/i-i-s-khamraev-m-b-склад-e';
import IISKhamraevMBСотрудникEForm from './forms/i-i-s-khamraev-m-b-сотрудник-e';
import IISKhamraevMBТоварEForm from './forms/i-i-s-khamraev-m-b-товар-e';
import IISKhamraevMBДокументModel from './models/i-i-s-khamraev-m-b-документ';
import IISKhamraevMBЗаказModel from './models/i-i-s-khamraev-m-b-заказ';
import IISKhamraevMBЗаписьВНакладнойModel from './models/i-i-s-khamraev-m-b-запись-в-накладной';
import IISKhamraevMBНакладнаяModel from './models/i-i-s-khamraev-m-b-накладная';
import IISKhamraevMBСкладModel from './models/i-i-s-khamraev-m-b-склад';
import IISKhamraevMBСотрудникModel from './models/i-i-s-khamraev-m-b-сотрудник';
import IISKhamraevMBСтрокаЗаказаModel from './models/i-i-s-khamraev-m-b-строка-заказа';
import IISKhamraevMBТоварНаСкладеModel from './models/i-i-s-khamraev-m-b-товар-на-складе';
import IISKhamraevMBТоварModel from './models/i-i-s-khamraev-m-b-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-khamraev-m-b-документ': IISKhamraevMBДокументModel,
    'i-i-s-khamraev-m-b-заказ': IISKhamraevMBЗаказModel,
    'i-i-s-khamraev-m-b-запись-в-накладной': IISKhamraevMBЗаписьВНакладнойModel,
    'i-i-s-khamraev-m-b-накладная': IISKhamraevMBНакладнаяModel,
    'i-i-s-khamraev-m-b-склад': IISKhamraevMBСкладModel,
    'i-i-s-khamraev-m-b-сотрудник': IISKhamraevMBСотрудникModel,
    'i-i-s-khamraev-m-b-строка-заказа': IISKhamraevMBСтрокаЗаказаModel,
    'i-i-s-khamraev-m-b-товар-на-складе': IISKhamraevMBТоварНаСкладеModel,
    'i-i-s-khamraev-m-b-товар': IISKhamraevMBТоварModel
  },

  'application-name': 'Khamraev MB',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Khamraev MB',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Khamraev MB',
          title: 'Khamraev MB'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'khamraev-m-b': {
          caption: 'KhamraevMB',
          title: 'KhamraevMB',
          'информация-о-заказе': {
            caption: 'Информация о заказе',
            title: 'Информация о заказе',
            'i-i-s-khamraev-m-b-накладная-l': {
              caption: 'Накладная',
              title: ''
            },
            'i-i-s-khamraev-m-b-заказ-l': {
              caption: 'Заказ',
              title: ''
            },
            'i-i-s-khamraev-m-b-документ-l': {
              caption: 'Документ',
              title: ''
            }
          },
          'товар-на-складе': {
            caption: 'Товар на складе',
            title: 'Товар на складе',
            'i-i-s-khamraev-m-b-склад-l': {
              caption: 'Склад',
              title: ''
            },
            'i-i-s-khamraev-m-b-товар-l': {
              caption: 'Товар',
              title: ''
            }
          },
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-khamraev-m-b-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-khamraev-m-b-документ-l': IISKhamraevMBДокументLForm,
    'i-i-s-khamraev-m-b-заказ-l': IISKhamraevMBЗаказLForm,
    'i-i-s-khamraev-m-b-накладная-l': IISKhamraevMBНакладнаяLForm,
    'i-i-s-khamraev-m-b-склад-l': IISKhamraevMBСкладLForm,
    'i-i-s-khamraev-m-b-сотрудник-l': IISKhamraevMBСотрудникLForm,
    'i-i-s-khamraev-m-b-товар-l': IISKhamraevMBТоварLForm,
    'i-i-s-khamraev-m-b-документ-e': IISKhamraevMBДокументEForm,
    'i-i-s-khamraev-m-b-заказ-e': IISKhamraevMBЗаказEForm,
    'i-i-s-khamraev-m-b-накладная-e': IISKhamraevMBНакладнаяEForm,
    'i-i-s-khamraev-m-b-склад-e': IISKhamraevMBСкладEForm,
    'i-i-s-khamraev-m-b-сотрудник-e': IISKhamraevMBСотрудникEForm,
    'i-i-s-khamraev-m-b-товар-e': IISKhamraevMBТоварEForm
  },

});

export default translations;
