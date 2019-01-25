export class User {
  public uid?;
  public fname?;
  public lname?;
  public email?;
  public subscriptions?:any[];
  public cart?: any [];

  constructor(uid?, email?, fname?, lname?, subscriptions?, cart?) {
    this.uid = uid;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.subscriptions = subscriptions;
    this.cart = cart;
  }
}
