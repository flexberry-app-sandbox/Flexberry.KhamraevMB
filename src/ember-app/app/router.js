import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-khamraev-m-b-документ-l');
  this.route('i-i-s-khamraev-m-b-документ-e',
  { path: 'i-i-s-khamraev-m-b-документ-e/:id' });
  this.route('i-i-s-khamraev-m-b-документ-e.new',
  { path: 'i-i-s-khamraev-m-b-документ-e/new' });
  this.route('i-i-s-khamraev-m-b-заказ-l');
  this.route('i-i-s-khamraev-m-b-заказ-e',
  { path: 'i-i-s-khamraev-m-b-заказ-e/:id' });
  this.route('i-i-s-khamraev-m-b-заказ-e.new',
  { path: 'i-i-s-khamraev-m-b-заказ-e/new' });
  this.route('i-i-s-khamraev-m-b-накладная-l');
  this.route('i-i-s-khamraev-m-b-накладная-e',
  { path: 'i-i-s-khamraev-m-b-накладная-e/:id' });
  this.route('i-i-s-khamraev-m-b-накладная-e.new',
  { path: 'i-i-s-khamraev-m-b-накладная-e/new' });
  this.route('i-i-s-khamraev-m-b-склад-l');
  this.route('i-i-s-khamraev-m-b-склад-e',
  { path: 'i-i-s-khamraev-m-b-склад-e/:id' });
  this.route('i-i-s-khamraev-m-b-склад-e.new',
  { path: 'i-i-s-khamraev-m-b-склад-e/new' });
  this.route('i-i-s-khamraev-m-b-сотрудник-l');
  this.route('i-i-s-khamraev-m-b-сотрудник-e',
  { path: 'i-i-s-khamraev-m-b-сотрудник-e/:id' });
  this.route('i-i-s-khamraev-m-b-сотрудник-e.new',
  { path: 'i-i-s-khamraev-m-b-сотрудник-e/new' });
  this.route('i-i-s-khamraev-m-b-товар-l');
  this.route('i-i-s-khamraev-m-b-товар-e',
  { path: 'i-i-s-khamraev-m-b-товар-e/:id' });
  this.route('i-i-s-khamraev-m-b-товар-e.new',
  { path: 'i-i-s-khamraev-m-b-товар-e/new' });
});

export default Router;
