//BEGIN-SNIPPET showcase
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { currenciesArray } from 'ember-currencies-and-format-money/currencies';

export default class Showcase extends Component {

  allCurrencies = currenciesArray;

  @tracked myMoneyValue = {amount: 325, currency: 'USD'};

  @action
  updateAmount(event){
    let amount = event.target.value;
    this.myMoneyValue = {amount: amount, currency: this.myMoneyValue.currency};
  }

  @action
  updateCurrency(event){
    let currency = event.target.value;
    this.myMoneyValue = {amount: this.myMoneyValue.amount, currency: currency};
  }
}
//END-SNIPPET
