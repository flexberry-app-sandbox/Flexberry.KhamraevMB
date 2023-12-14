import {
  defineNamespace,
  defineProjections,
  Model as СкладMixin
} from '../mixins/regenerated/models/i-i-s-khamraev-m-b-склад';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СкладMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
