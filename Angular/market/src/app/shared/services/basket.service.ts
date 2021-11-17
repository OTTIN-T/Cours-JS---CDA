import { Injectable } from '@angular/core';
import Basket from '../models/basket';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basket: Basket = new Basket({
    products: [] as Item[],
    totalPrice: 0,
  });

  constructor() {}

  getBasket(): Basket {
    return this.basket;
  }

  addToBasket(product: Item): Item[] {
    const ifExist = this.basket.products.find((item) => item.id === product.id);
    if (ifExist) {
      const productIndex = this.basket.products.findIndex(
        (item) => item.id === ifExist.id
      );
      this.basket.products.splice(productIndex, 1);
    }
    this.basket.products.push(product);
    return this.basket.products;
  }

  removeToBasket(product: Item): Item[] {
    const productIndex = this.basket.products.findIndex(
      (item) => item.id === product.id
    );
    this.basket.products.splice(productIndex, 1);
    return this.basket.products;
  }

  getTotalPrice(products: Item[]): number {
    const totalPrice = products
      .map((item) => item.totalPrice)
      .reduce((a, b) => a + b, 0);
    return Math.floor(totalPrice * 100) / 100;
  }
}
