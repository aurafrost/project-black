export class Product {
  public productId?;
  public ownerId?;
  public img?;
  public price?;
  public title?;

  constructor(productId?, ownerId?, img?, price?, title?) {
    this.ownerId = ownerId;
    this.productId = productId;
    this.img = img;
    this.price = price;
    this.title = title;
  }
}
