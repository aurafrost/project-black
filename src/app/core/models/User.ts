export class User {
  public uid?;
  public fname?;
  public lname?;
  public email?;
  public role?;
  public subscriptions?:Object[];
  public cart?: any [];

  constructor(uid?, email?, fname?, lname?, role?, subscriptions?, cart?) {
    this.uid = uid;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.role = role;
    this.subscriptions = subscriptions;
    this.cart = cart;
  }
}
