import { Component, OnInit } from '@angular/core';
import Basket from 'src/app/shared/models/basket';
import { Item } from 'src/app/shared/models/item';
import { BasketService } from 'src/app/shared/services/basket.service';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basket: Basket = {} as Basket;
  item: Item = {} as Item;

  constructor(
    private basketService: BasketService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.getBasket();
    this.getTotalPrice(this.basket.products);
  }

  getBasket(): Basket {
    return (this.basket = this.basketService.getBasket());
  }

  getTotalPrice(item: Item[]): number {
    return (this.basket.totalPrice = this.basketService.getTotalPrice(item));
  }

  addItem(index: number): number {
    this.basket.products[index].quantity++;
    this.totalPriceByProduct(this.basket.products[index], index);
    return this.getTotalPrice(this.basket.products);
  }

  removeItem(index: number): number {
    this.basket.products[index].quantity--;
    this.totalPriceByProduct(this.basket.products[index], index);
    return this.getTotalPrice(this.basket.products);
  }

  totalPriceByProduct(item: Item, index: number): number {
    return (this.basket.products[index].totalPrice =
      this.itemService.getTotalPrice(item));
  }

  removeItemToCart(item: Item): number {
    this.basket.products = this.basketService.removeToBasket(item);
    return this.getTotalPrice(this.basket.products);
  }
}
