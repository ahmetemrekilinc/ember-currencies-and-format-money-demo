//BEGIN-SNIPPET showcase
import Component from '@ember/component';
import { currenciesArray } from 'ember-currencies-and-format-money/currencies';

export default Component.extend({

  allCurrencies: currenciesArray,

  init(){
    this._super(...arguments);
    this.set('myMoneyValue', {amount: 324, currency: 'USD'});
  },

  actions: {
    updateAmount(event){
      let amount = event.target.value;
      this.set('myMoneyValue', {amount: amount, currency: this.get('myMoneyValue.currency')});
    },
    updateCurrency(event){
      let currency = event.target.value;
      this.set('myMoneyValue', {amount: this.get('myMoneyValue.amount'), currency: currency});
    }
  }

});
//END-SNIPPET
