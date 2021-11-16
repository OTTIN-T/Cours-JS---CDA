import { Component, Input, OnInit } from '@angular/core';
import Basket from 'src/app/shared/models/basket';
import { Item } from 'src/app/shared/models/item';
import { BasketService } from 'src/app/shared/services/basket.service';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item = {} as Item;
  basket: Basket = {} as Basket;

  constructor(
    private basketService: BasketService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {}

  addItem(): void {
    this.item.quantity++;
  }

  removeItem(): void {
    this.item.quantity--;
  }

  totalPriceByProduct(item: Item): number {
    return (this.item.totalPrice = this.itemService.getTotalPrice(item));
  }

  addItemToCart(item: Item): Item[] {
    this.totalPriceByProduct(item);
    return (this.basket.products = this.basketService.addToBasket(item));
  }
}
