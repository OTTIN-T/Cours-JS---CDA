import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Basket from 'src/app/shared/models/basket';
import { Item } from 'src/app/shared/models/item';
import { BasketService } from 'src/app/shared/services/basket.service';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  item: Item = {} as Item;
  id: number = 0;
  basket: Basket = {} as Basket;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private basketService: BasketService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getItem(this.id);
  }

  getItem(id: number): Item {
    return (this.item = this.itemService.getItem(id));
  }

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
