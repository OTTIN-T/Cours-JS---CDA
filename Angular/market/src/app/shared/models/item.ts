export class Item {
  id: number;
  name: string;
  description: string;
  price: number;
  totalPrice: number;
  imageUrl: string;
  quantity: number;

  constructor(item?: any) {
    item = item || {};
    this.id = item.id || 0;
    this.name = item.name || '';
    this.description = item.description || '';
    this.price = item.price || 0;
    this.totalPrice = item.totalPrice || 0;
    this.imageUrl = item.imageUrl || '';
    this.quantity = item.quantity || 0;
  }
}
