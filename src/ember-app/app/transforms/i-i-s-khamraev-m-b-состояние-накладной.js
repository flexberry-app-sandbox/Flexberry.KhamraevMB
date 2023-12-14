import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеНакладнойEnum from '../enums/i-i-s-khamraev-m-b-состояние-накладной';

export default FlexberryEnum.extend({
  enum: СостояниеНакладнойEnum,
  sourceType: 'IIS.KhamraevMB.СостояниеНакладной'
});
