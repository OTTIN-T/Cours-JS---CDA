import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = [
    new Item({
      id: 1,
      name: 'Tasse blanche',
      description: 'Magnifique tasse',
      price: 3.9,
      totalPrice: 0,
      imageUrl: 'assets/images/tasse_blanche.jpg',
      quantity: 0,
    }),
    new Item({
      id: 2,
      name: 'Tasse jaune',
      description: 'Sublime tasse',
      price: 2.8,
      totalPrice: 0,
      imageUrl: 'assets/images/tasse_jaune.jpg',
      quantity: 0,
    }),
    new Item({
      id: 3,
      name: 'Tasse violette',
      description: 'Grandiose tasse',
      price: 3.5,
      totalPrice: 0,
      imageUrl: 'assets/images/tasse_violette.jpg',
      quantity: 0,
    }),
    new Item({
      id: 4,
      name: 'Tasse bleue',
      description: 'Incroyable tasse',
      price: 4.6,
      totalPrice: 0,
      imageUrl: 'assets/images/tasse_bleue.jpg',
      quantity: 0,
    }),
    new Item({
      id: 5,
      name: 'Tasse turquoise',
      description: 'La plus belle des tasse',
      price: 5.8,
      totalPrice: 0,
      imageUrl: 'assets/images/tasse_turquoise.jpg',
      quantity: 0,
    }),
    new Item({
      id: 6,
      name: 'Tasse rouge',
      description: 'Tasse goatesque',
      price: 6.66,
      totalPrice: 0,
      imageUrl: 'assets/images/tasse_rouge.jpg',
      quantity: 0,
    }),
    new Item({
      id: 7,
      name: 'Tasse rose',
      description: 'Laisse sans voix',
      price: 7.77,
      totalPrice: 0,
      imageUrl: 'assets/images/tasse_rose.jpg',
      quantity: 0,
    }),
    new Item({
      id: 8,
      name: 'Tasse noire',
      description: 'Une tasse dark',
      price: 8.84,
      totalPrice: 0,
      imageUrl: 'assets/images/tasse_noire.jpg',
      quantity: 0,
    }),
  ];

  constructor() {}

  getItems(): Item[] {
    return this.items;
  }

  getItem(id: number): Item {
    return this.items[id - 1];
  }

  getTotalPrice(item: Item): number {
    item.totalPrice = item.price * item.quantity;
    return Math.floor(item.totalPrice * 100) / 100;
  }
}
