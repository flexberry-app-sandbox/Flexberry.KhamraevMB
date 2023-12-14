import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-khamraev-m-b-товар-на-складе', 'Unit | Model | i-i-s-khamraev-m-b-товар-на-складе', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
