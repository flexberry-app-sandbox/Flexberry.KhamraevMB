import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-khamraev-m-b-строка-заказа', 'Unit | Serializer | i-i-s-khamraev-m-b-строка-заказа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-khamraev-m-b-строка-заказа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-khamraev-m-b-состояние-заказа',
    'transform:i-i-s-khamraev-m-b-состояние-накладной',

    'model:i-i-s-khamraev-m-b-документ',
    'model:i-i-s-khamraev-m-b-заказ',
    'model:i-i-s-khamraev-m-b-запись-в-накладной',
    'model:i-i-s-khamraev-m-b-накладная',
    'model:i-i-s-khamraev-m-b-склад',
    'model:i-i-s-khamraev-m-b-сотрудник',
    'model:i-i-s-khamraev-m-b-строка-заказа',
    'model:i-i-s-khamraev-m-b-товар-на-складе',
    'model:i-i-s-khamraev-m-b-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
