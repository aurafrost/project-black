export class Product {
  public productId?;
  public ownerId?;
  public img?;
  public price?;
  public title?;
  public quantity?;

  constructor(productId?, ownerId?, img?, price?, title?, quantity?) {
    this.ownerId = ownerId;
    this.productId = productId;
    this.img = img;
    this.price = price;
    this.title = title;
    this.quantity = quantity;
  }
}
