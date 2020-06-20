import { async } from '@angular/core/testing';
import { AuthService, Account } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { User } from 'firebase';
describe('AuthService', () => {
    let authService: AuthService;
    let mockAngularFireAuth: any;
    let mockAngualrFireStore: AngularFirestore;
    let spyLocalStorage: any;
    let mockUser: Partial<User>;

    /*
    * Mock user data
    */
    mockUser = {
        displayName: 'abc',
        email: 'abc@abc.com',
        phoneNumber: '123456789',
        photoURL: null,
        providerId: 'abc',
        uid: '123456789',
    };

    beforeEach(() => {
        mockAngularFireAuth = {
            authState: of(mockUser),
            signInWithEmailAndPassword() {
                return Promise.resolve({});
            }
        };
        spyLocalStorage = jest.spyOn(localStorage, 'setItem');
        authService = new AuthService(mockAngularFireAuth, mockAngualrFireStore);
    });

    describe('AngularFireAuth', () => {

        it('should correctly create the service', () => {
            expect(authService).toBeTruthy();
        });

        it('should return the correct user', () => {
            expect(authService.user.displayName).toEqual('abc');
            expect(authService.user.uid).toEqual('123456789');
            expect(authService.user.email).toEqual('abc@abc.com');
        });

        it('should save user to local storage', () => {
            expect(spyLocalStorage).toHaveBeenCalledWith('user', JSON.stringify(mockUser));
        });

        it('should save null to local storge if User if not available', () => {
            jest.clearAllMocks();
            mockAngularFireAuth = {
                authState: of({})
            };
            authService = new AuthService(mockAngularFireAuth, mockAngualrFireStore);

            expect(spyLocalStorage).toHaveBeenCalledWith('user', "{}");
        });
    });

    describe('Login Account', () => {

        it('should login user', async () => {
            // jest.mock('angularFireAuth', () => ({
            //     signInWithEmailAndPassword(email, password) {
            //         return Promise.resolve({ name: 'someUser' })
            //     }
            // }))

            // jest.mock('angularFireAuth', () => {
            //     return {
            //         signInWithEmailAndPassword: jest.fn(),
            //     };
            // });

            const spy = spyOn(mockAngularFireAuth, 'signInWithEmailAndPassword').and.callThrough();
            const accont: Account = {
                email: 'aaa',
                password: 'bbb'
            }
            authService.login(accont);
            expect(spy).toHaveBeenCalled()
        });

        it('should expect resolve', async () => {
            const spy = spyOn(mockAngularFireAuth, 'signInWithEmailAndPassword').and.callThrough();
            const accont: Account = {
                email: 'aaa',
                password: 'bbb'
            }

            return authService.login(accont).then(e => {
                expect(e).toEqual('login successful')
            });
            // await expect(authService.login(accont)).resolve.toBeDefined();
        });

        // it('should return reject promise', async () => {
        //     jest.clearAllMocks();
        //     mockAngularFireAuth = {
        //         authState: of(mockUser),
        //         signInWithEmailAndPassword() {
        //             return Promise.reject('aa');
        //         }
        //     };
        //     authService = new AuthService(mockAngularFireAuth, mockAngualrFireStore);

        //     const accont: Account = {
        //         email: 'aaa',
        //         password: 'bbb'
        //     }
        //     return expect(authService.login(accont)).toEqual(new Error('error'));
        // });
    })

})
