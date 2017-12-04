import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tethered-box', 'Integration | Component | tethered box', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.$().add('div').addClass("thingie");
  // Template block usage:
  this.render(hbs`
    {{#tethered-box
      target=".thingie"
      boxAttachment="top right"
      boxTargetAttachment="middle right"
      connectorAttachment="top center"
      connectorTargetAttachment="bottom center"
    }}
    {{/tethered-box}}
  `);

  assert.equal(this.$(".content").text(), '');
});
