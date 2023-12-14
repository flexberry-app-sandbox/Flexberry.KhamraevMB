import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Khamraev MB',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Khamraev MB',
          title: 'Khamraev MB'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
