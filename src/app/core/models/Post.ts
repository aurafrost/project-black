export class Post {
  public id?;
  public ownerId?;
  public img?;
  public title?;
  public caption?;
  public date?;

  constructor(id?, productId?, ownerId?, img?, price?, title?, caption?, date?) {
    this.id = id;
    this.ownerId = ownerId;
    this.img = img;
    this.title = title;
    this.caption = caption;
    this.date = date;
  }
}
