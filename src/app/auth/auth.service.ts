import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User, auth } from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface Account {
    email: string;
    password: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User;
    constructor(private angularFireAuth: AngularFireAuth, private angualrFireStore: AngularFirestore, private router: Router) {
        this.angularFireAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);
            }
        })
    }

    login(account: Account): Promise<string> {
        return new Promise((resolve, reject) => {
            this.angularFireAuth.signInWithEmailAndPassword(account.email, account.password)
                .then(result => {
                    resolve('login successful');
                    this.saveUserData(result.user);
                }).catch(error => {
                    reject(error.messsage);
                });
        });
        // return this.angularFireAuth.signInWithEmailAndPassword(account.email, account.password)
        //     .then(result => {
        //         console.log('loggedin' + result);
        //         this.saveUserData(result.user);
        //     }).catch(error => {
        //         return error;
        //     });
    }

    register(email: string, password: string) {
        return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                this.sendVerificationEmail();
                this.saveUserData(result.user);
            }).catch(error => {
                return error;
            })
    }

    sendVerificationEmail() {
        return this.angularFireAuth.currentUser
            .then(user => {
                user.sendEmailVerification();
                console.log('verify email');
            })
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }

    saveUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.angualrFireStore.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        })
    }



    async logout() {
        return this.angularFireAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.user = null;
            console.log('loggedout');
        });
    }
}
