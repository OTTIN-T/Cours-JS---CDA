import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): Item[] {
    return (this.items = this.itemService.getItems());
  }
}

// <!-- Creation d un petit ecommerce:
// Page d accueil on affiche une liste de 5 6 produits, sur chaque produit on peut mettre direct dans le panier.
// IL y a un bouton pour voir le detail du produit.
// Dans la fiche produit on peut aussi mettre dans le panier.
// Une page panier existe avec le recap, et la possibilite d augmenter, reduire le nombre de produits et/ou de le supprimer.
// Bien evidemment il y a le montant total de votre commande -->
