import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-khamraev-m-b-накладная';

import ДокументModel from './i-i-s-khamraev-m-b-документ';

let Model = ДокументModel.extend(НакладнаяMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
