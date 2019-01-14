import {Injectable, NgZone} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private router: Router,
    private ngZone: NgZone, // service to remove outside scope warning
    private userService: UserService
  ) {
    // Save auth user data to local storage
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        console.log(auth);
        this.auth = auth;
        localStorage.setItem('auth', JSON.stringify(this.auth));
        console.log(JSON.parse(localStorage.getItem('auth')));
      } else {
        localStorage.setItem('auth', null);
        console.log(localStorage.getItem('auth'));
      }
    });
  }

  get authenticated(): boolean {
    return this.auth != null;
  }

  get currentUser(): any {
    return this.authenticated ? this.auth.currentUser : null;
  }

  get userId(): string {
    return this.authenticated ? this.auth.uid  : null;
  }

  signIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user.emailVerified) {
          this.auth = auth.user;
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
        }
      }).catch((err) => {
        window.alert(err.message);
      });
  }

  signUp(email, password, user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // TODO: Send Verification Email
        // TODO: redirect to login
        this.userService.createUser(user);
      }).catch(err => {
        window.alert(err.message);
      });
  }

  signOut() {
    return this.afAuth.auth.signOut()
      .then(() => {
        localStorage.removeItem('auth');
        this.router.navigate(['home']);
      });
  }
}
