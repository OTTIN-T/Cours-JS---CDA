import { Item } from './item';

export default class Basket {
  products: Item[] = [];
  totalPrice: number;

  constructor(basket?: any) {
    basket = basket || {};
    this.products = basket.products || [];
    this.totalPrice = basket.totalPrice || 0;
  }
}
