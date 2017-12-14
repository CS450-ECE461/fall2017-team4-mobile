import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('job-entry', 'Integration | Component | job entry', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{job-entry}}`);

  assert.equal(this.$().text().replace(/\n/g, "").replace(/ /g, ""), "ViewJobDescription10h")
});
