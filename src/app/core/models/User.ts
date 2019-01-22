export class User {
  public uid?;
  public fname?;
  public lname?;
  public email?;
  public subscriptions?:any[];

  constructor(uid?, email?, fname?, lname?, subscriptions?) {
    this.uid = uid;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.subscriptions = subscriptions;
  }
}
