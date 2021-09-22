export default class Galery {
  constructor(url) {
    this.url = url;
  }
  getImg() {
    return `<img src="${this.url}" alt=""><br>`;
  }
}
