import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()

export class AuthenticationService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

   login() {
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

   logout() {
     this.afAuth.auth.signOut();
   }
}
