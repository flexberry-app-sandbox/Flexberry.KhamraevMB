import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеЗаказаEnum from '../enums/i-i-s-khamraev-m-b-состояние-заказа';

export default FlexberryEnum.extend({
  enum: СостояниеЗаказаEnum,
  sourceType: 'IIS.KhamraevMB.СостояниеЗаказа'
});
