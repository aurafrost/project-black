import {Injectable, NgZone} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {User} from '../../models/User';
import {BehaviorSubject, Observable} from 'rxjs';

  @Injectable({
  providedIn: 'root'
})
export class AuthService {
    public auth = new BehaviorSubject<Object>({});
    $auth = this.auth.asObservable();
    private userList: User[]; 
  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private router: Router,
    private ngZone: NgZone, // categories to remove outside scope warning
    private userService: UserService
  ) {
    // Save auth user data to local storage
    this.afAuth.authState.subscribe(auth => {
      
      if (this.auth.next) {
        this.auth.next(auth);
        localStorage.setItem('auth', JSON.stringify(auth));
      } else {
        localStorage.setItem('auth', null);
        this.auth = null;
      }
    });

    this.userService.getAllUsers().subscribe(ul => {
      this.userList = ul;
    })

  }

  get authenticated(): boolean {
    return this.auth != null;
  }

  getAuth() {
    return this.auth;
  }

  // get currentUser(): any {
  //   return this.authenticated ? this.auth.currentUser : null;
  // }
  //
  // get userId(): string {
  //   return this.authenticated ? this.auth.uid  : null;
  // }

  signIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (1) {//auth.user.emailVerified) {
          console.log(auth.user);
          if (auth) {
            localStorage.setItem('auth', JSON.stringify(auth.user));
            console.log(JSON.parse(localStorage.getItem('auth')));
          } else {
            localStorage.setItem('auth', null);
            console.log(localStorage.getItem('auth'));
          }
            
          console.log(this.userList)
          this.userList.forEach(user => {
            if(user.uid === auth.user.uid)
            {
              if(user.role === "celeb")
                this.router.navigate(['sports']);
              else if(user.role === "user")
                this.router.navigate([''])
              else
                this.router.navigate(['travel'])
            }
          })

        }
      }).catch((err) => {
        window.alert(err.message);
      });
  }

  signUp(user: User, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
      .then(auth => {
        auth.user.sendEmailVerification().then(() => {
          // TODO: open login model or redirect to login page
        });
        user.uid = auth.user.uid;
        this.userService.createUser(auth.user.uid, user);
      }).catch(err => {
        window.alert(err.message);
      });
  }

  signOut() {
    return this.afAuth.auth.signOut()
      .then(() => {
        this.auth.next(null);
        localStorage.removeItem('auth');
        // this.auth.next(null);
        this.router.navigate(['']);
      });
  }
}
