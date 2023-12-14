import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.khamraev-m-b.caption'),
          title: i18n.t('forms.application.sitemap.khamraev-m-b.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.khamraev-m-b.информация-о-заказе.caption'),
            title: i18n.t('forms.application.sitemap.khamraev-m-b.информация-о-заказе.title'),
            children: [{
              link: 'i-i-s-khamraev-m-b-накладная-l',
              caption: i18n.t('forms.application.sitemap.khamraev-m-b.информация-о-заказе.i-i-s-khamraev-m-b-накладная-l.caption'),
              title: i18n.t('forms.application.sitemap.khamraev-m-b.информация-о-заказе.i-i-s-khamraev-m-b-накладная-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-khamraev-m-b-заказ-l',
              caption: i18n.t('forms.application.sitemap.khamraev-m-b.информация-о-заказе.i-i-s-khamraev-m-b-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.khamraev-m-b.информация-о-заказе.i-i-s-khamraev-m-b-заказ-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-khamraev-m-b-документ-l',
              caption: i18n.t('forms.application.sitemap.khamraev-m-b.информация-о-заказе.i-i-s-khamraev-m-b-документ-l.caption'),
              title: i18n.t('forms.application.sitemap.khamraev-m-b.информация-о-заказе.i-i-s-khamraev-m-b-документ-l.title'),
              icon: 'address card',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.khamraev-m-b.товар-на-складе.caption'),
            title: i18n.t('forms.application.sitemap.khamraev-m-b.товар-на-складе.title'),
            children: [{
              link: 'i-i-s-khamraev-m-b-склад-l',
              caption: i18n.t('forms.application.sitemap.khamraev-m-b.товар-на-складе.i-i-s-khamraev-m-b-склад-l.caption'),
              title: i18n.t('forms.application.sitemap.khamraev-m-b.товар-на-складе.i-i-s-khamraev-m-b-склад-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-khamraev-m-b-товар-l',
              caption: i18n.t('forms.application.sitemap.khamraev-m-b.товар-на-складе.i-i-s-khamraev-m-b-товар-l.caption'),
              title: i18n.t('forms.application.sitemap.khamraev-m-b.товар-на-складе.i-i-s-khamraev-m-b-товар-l.title'),
              icon: 'paperclip',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.khamraev-m-b.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.khamraev-m-b.сотрудники.title'),
            children: [{
              link: 'i-i-s-khamraev-m-b-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.khamraev-m-b.сотрудники.i-i-s-khamraev-m-b-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.khamraev-m-b.сотрудники.i-i-s-khamraev-m-b-сотрудник-l.title'),
              children: null
            }]
          }]
        }
      ]
    };
  }),
})