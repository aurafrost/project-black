export class Product {
  public productId?;
  public img?;
  public price?;
  public title?;

  constructor(productId?, img?, price?, title?) {
    this.productId = productId;
    this.img = img;
    this.price = price;
    this.title = title;
  }
}
