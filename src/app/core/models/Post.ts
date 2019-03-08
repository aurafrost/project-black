export class Post {
  public id?;
  public ownerId?;
  public img?;
  public title?;
  public caption?;
  public date?;
  public likeCount?;

  constructor(id?, productId?, ownerId?, img?, price?, title?, caption?, date?, likeCount?) {
    this.id = id;
    this.ownerId = ownerId;
    this.img = img;
    this.title = title;
    this.caption = caption;
    this.date = date;
    this.likeCount = likeCount;
  }
}
