import { UserService} from './user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';
import { AngularFireObject } from 'angularfire2/database';


@Injectable()

export class AuthenticationService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }

   login() {
     const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl', returnUrl);
     this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }

   logout() {
     this.afAuth.auth.signOut();
   }


}
