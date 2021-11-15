export default class Bar {
  constructor(nameBar, adress, number) {
    this.nameBar = nameBar;
    this.number = number;
    this.adress = adress;
  }

  getInfo() {
    return `${this.nameBar} - ${this.adress} - ${this.number}`;
  }
}
