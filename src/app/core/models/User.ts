export class User {
  public uid?;
  public fname?;
  public lname?;
  public email?;
  public subscriptions?: any[];
  public events?: any [];

  constructor(uid?, email?, fname?, lname?, subscriptions?, events?) {
    this.uid = uid;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.subscriptions = subscriptions;
    this.events = events;
  }
}
