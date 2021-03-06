import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

export interface Account {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angualrFireStore: AngularFirestore
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  login(account: Account): Promise<string> {
    return new Promise((resolve, reject) => {
      this.angularFireAuth
        .signInWithEmailAndPassword(account.email, account.password)
        .then((result) => {
          resolve('login successful');
        })
        .catch((error) => {
          reject(error.messsage);
        });
    });
  }

  register(userCredentials: { email: string; password: string; name: string }) {
    return this.angularFireAuth.createUserWithEmailAndPassword(
      userCredentials.email,
      userCredentials.password
    );
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  saveUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.angualrFireStore.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  async logout() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.user = null;
      console.log('loggedout');
    });
  }
}
