import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {} from '@angular/cli';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../../models/User';
import {take} from 'rxjs/operators';
import { SubscriptionService } from '../sub/subscription.service';
import { Topic } from '../../models/Topic';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;
  private userArr: User[];
  private userDoc: AngularFirestoreDocument<User>;
  private authObj;
  private SubObs: Observable<any>;
  auth = JSON.parse(localStorage.getItem('auth'));
  constructor(
    private afstore: AngularFirestore,
    private ss: SubscriptionService
  ) {
    this.userCollection = this.afstore.collection('Users');

    this.users = this.userCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.uid = a.payload.doc.id;
        return data;
      });
    });

    this.users.subscribe(u => {
      this.userArr = u;
    });
    // this.users.subscribe(u => {
    //   this.userArr = u;
    //   this.userArr.forEach(user => {
    //     console.log(this.ss.getSubCollection(user.uid))
    //     this.SubObs = this.ss.getSubCollection(user.uid);
    //     this.SubObs.subscribe(l => {
    //       console.log(l);
    //       user.subscriptions = l;
    //     })
    //   })
    //   console.log(this.userArr);
    // })
    this.authObj = JSON.parse(localStorage.getItem('auth'));
  }

  getUserById(id) {
    return this.afstore.doc(`Users/${id}`).valueChanges().pipe(take(1));
  }

  //-Jimmy: used for personality page
  getUser(id){
    return this.afstore.doc<User>(`Users/${id}`).valueChanges();
  }

  //-Jimmy/aurafrost: used for editing on the account page.
  alterUser(cardnum,cardcvv,cardname,email){
    const data={
      cardNum:cardnum,
      cardCVV:cardcvv,
      cardName:cardname,
      email:email,
    }
    this.afstore.doc('Users/'+this.auth.uid).update(data);
  }

  setProfile(name){
    // this.topic=name;
    const data={
      topic:name,
    }
    this.afstore.doc('Users/'+this.auth.uid).update(data);
  }

  getTopic(){
    return this.afstore.doc<Topic>('Users/'+this.auth.uid).valueChanges();
  }

  getProfile(){
    return this.afstore.doc<Topic>('Users/'+this.auth.uid).valueChanges();
  }

  addSub(user,topic){
    const data={
      name:topic,
    }
    this.afstore.doc('Users/'+user+'/subscriptions/'+topic).set(data);
    console.log("Subscription for "+user+" to "+topic+" added.");
  }

  removeSub(user,topic){
    this.afstore.doc('Users/'+user+'/subscriptions/'+topic).delete();
    console.log("Subscription for "+user+" to "+topic+" removed.");
  }
  

  getUsers() {
    //return this.afDatabase.list(`/Users/`);
    //return this.afstore.collection()
  }

  setUser(userId) {
    //this.user = this.afDatabase.object(`Users/${userId}`);
  }

  createUser(userId, user) {
    //return this.afDatabase.object(`Users/${userId}`).set(user);
    this.userCollection.doc(userId).set(Object.assign({}, user));
    
  }

  //currently implemented in service, but DO NOT USE
  //is not accessable from site and will not remove user login information from auth service
  deleteUser(userId) {
    //this.afDatabase.object(`Users/${userId}`).remove();
    this.userDoc = this.userCollection.doc(userId);
    this.userDoc.delete();
  }

  getAllUsers(){
    //this.users = this.afstore.collection('test-users').valueChanges();
    return this.users;
  }

  getUsersByCategory(category) {
    return this.afstore.collection('Users', ref => ref.where('category', '==', category))
      .valueChanges();
  }
}
