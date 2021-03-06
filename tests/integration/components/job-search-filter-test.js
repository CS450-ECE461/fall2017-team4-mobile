import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('job-search-filter', 'Integration | Component | job search filter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{job-search-filter}}`);

  assert.equal(this.$().text().trim(), 'Open Search');

  // Template block usage:
  this.render(hbs`
    {{#job-search-filter}}
      template block text
    {{/job-search-filter}}
  `);

  assert.equal(this.$().text().trim(), 'Open Search');
});
