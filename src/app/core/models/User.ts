export class User {
  public uid?;
  public fname?;
  public lname?;
  public email?;
  public events?: any [];
  public role?;
  public subscriptions?: Object[];
  public bio?;
  public image?;

  constructor(uid?, email?, fname?, lname?, role?, subscriptions?, events?, bio?, image?) {
    this.uid = uid;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.role = role;
    this.subscriptions = subscriptions;
    this.events = events;
    this.bio=bio;
    this.image = image;
  }
}
