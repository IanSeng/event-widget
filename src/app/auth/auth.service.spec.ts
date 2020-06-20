import { AuthService } from './auth.service';
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

    

    describe('AngularFireAuth', () => {
        beforeEach(() => {
            mockAngularFireAuth = {
                authState: of(mockUser)
            };
            spyLocalStorage = jest.spyOn(localStorage, 'setItem');
            authService = new AuthService(mockAngularFireAuth, mockAngualrFireStore);
        });
        
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
        it('should login user', () => {

        })
    })


})