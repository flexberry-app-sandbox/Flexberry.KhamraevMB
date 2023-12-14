import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказMixin
} from '../mixins/regenerated/models/i-i-s-khamraev-m-b-заказ';

import ДокументModel from './i-i-s-khamraev-m-b-документ';

let Model = ДокументModel.extend(ЗаказMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
