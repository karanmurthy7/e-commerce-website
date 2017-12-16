import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  loggedInUser$: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth) { 
    this.loggedInUser$ = afAuth.authState;
  }
    
  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
