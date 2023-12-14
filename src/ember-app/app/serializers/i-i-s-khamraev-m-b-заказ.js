import { Serializer as ЗаказSerializer } from
  '../mixins/regenerated/serializers/i-i-s-khamraev-m-b-заказ';
import ДокументSerializer from './i-i-s-khamraev-m-b-документ';

export default ДокументSerializer.extend(ЗаказSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
