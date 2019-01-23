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
  private auth;
  $auth;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private router: Router,
    private ngZone: NgZone, // service to remove outside scope warning
    private userService: UserService
  ) {
    this.auth = new BehaviorSubject<Object>({});
    this.$auth = this.auth.asObservable();
    // Save auth user data to local storage
    this.afAuth.authState.subscribe(auth => {
      console.log("auth");
      console.log(this.auth);
      if (this.auth.next) {
        this.auth.next(auth);
        localStorage.setItem('auth', JSON.stringify(auth));
      } else {
        localStorage.setItem('auth', null);
        this.auth = null;
      }
    });
  }

  get authenticated(): boolean {
    return this.auth != null;
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
        if (auth.user.emailVerified) {
            if (auth) {
              localStorage.setItem('auth', JSON.stringify(auth.user));
              console.log(JSON.parse(localStorage.getItem('auth')));
            } else {
              localStorage.setItem('auth', null);
              console.log(localStorage.getItem('auth'));
            }
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
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
        localStorage.removeItem('auth');
        // this.auth.next(null);
        this.router.navigate(['']);
      });
  }
}
